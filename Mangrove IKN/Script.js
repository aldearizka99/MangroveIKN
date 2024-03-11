// Function to mask clouds using the Sentinel-2 QA band.
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0).and(
             qa.bitwiseAnd(cirrusBitMask).eq(0));

  // Return the masked and scaled data, without the QA bands.
  return image.updateMask(mask).divide(10000)
      .select("B.*")
      .copyProperties(image, ["system:time_start"])
}


//2.2) Adding Spectral Indices
///////////////////////////////

// This function maps spectral indices for Mangrove Mapping using Landsat 8 Imagery
var addIndicesL8 = function(img) {
  // NDVI
  var ndvi = img.normalizedDifference(['B8','B4']).rename('NDVI');
  var ndvi_red = img.normalizedDifference(['B4','B3']).rename('NDVI_RED');
  var mndwi = img.normalizedDifference(['B3','B11']).rename('MNDWI');
  var ndwi = img.normalizedDifference(['B2','B4']).rename('NDWI');
  var lswi = img.normalizedDifference(['B4','B8']).rename('LSWI');
  var savi = img.expression(
    '((c+L)*(NIR-Red)/(NIR+Red+L))',
    {
      'c': ee.Image(1),
      'Red': img.select('B4'),
      'NIR': img.select('B8'),
      'L': ee.Image(0.5)
    }).rename('SAVI');
  var ndbi = img.expression(
    '(SWIR1-NIR)/(SWIR1+NIR)',
    {
      'SWIR1': img.select('B11'),
      'NIR': img.select('B8'),
      'BLUE': img.select('B2')
    }).rename('NDBI');
  return img
    .addBands(ndvi)
    .addBands(ndvi_red)
    .addBands(mndwi)
    .addBands(ndwi)
    .addBands(lswi)
    .addBands(savi)
    .addBands(ndbi);
};

//2.3) Filter Landsat data by Date and Region
/////////////////////////////////////////////

// Temporal Parameters

// Mendefinisikan tanggal waktu perekaman yang digunakan
var startdate=ee.Date.fromYMD(2019,01,01);
var enddate=ee.Date.fromYMD(2019,12,31);

// Map the function over one year of data and take the median.
// Load Sentinel-2 TOA reflectance data.
var collection = ee.ImageCollection('COPERNICUS/S2_SR')
    .filterDate(startdate, enddate)
    // Pre-filter to get less cloudy granules.
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 50))
    .map(maskS2clouds)
    .map(addIndicesL8); // Add the indices

//2.5) Composite the Landsat image collection
/////////////////////////////////////////////

//You can composite on a per pixel, per-band basis using .median()
// OR with quality bands like .qualityMosaic('NDVI')

var composite = collection
              // Uses the median reducer
              .median() 
              // Clips the composite to our area of interest
              .clip(AOI); 
print(composite);