# Mangrove Ecosystem Mapping Using Multisumber Images (Sentinel-2A and Sentinel-1) Using Cloud-Based Computing In Balikpapan Bay

![mangrove](https://github.com/aldearizka99/MangroveIKN/assets/57086261/22361bc2-b8db-4074-ac89-82551f67b53a)


Source. Mongabay

Not separated from the role and function as a balancer of coastal ecosystems, the existence of mangroves is very important so it requires preservation and prevention of damage such as degradation and deforestation. The sustainability of mangrove ecosystems in Balikpapan Bay needs to be considered, this is due to the existence of human activities that have the potential to adversely affect mangroves, such as nickel mining, industrial development, shipping lanes, crude oil spills in 2018, and IKN infrastructure development whose development locations entered the mangrove ecosystem. 

The objectives of this study are, (1) to map the distribution of mangrove ecosystem land changes in mangrove areas in Balikpapan Bay using multisource images in 2019 and 2022, (2) to analyze the mangrove density level in 2019 and 2022. 
This research was conducted land cover classification process with Random Forest algorithm model of mangrove ecosystem using Sentinel-2A image, Sentinel-1 SAR image, and SRTM DEM on Google Earth Engine (GEE) platform.

## Sentinel-1 SAR Image
The Sentinel-1 imagery used in the mangrove mapping study utilised the Sentinel-1 SAR GRD product dataset: C-band Synthetic Aperture Radar Ground Range Detected, log scaling. This dataset has been calibrated, converted to backscattering coefficient (σ◦, dB) and orthometrically corrected. Each scene has 1 of three resolutions (10, 25, or 40 metres), 4 band combinations (according to polarisation capture), and 3 instrument modes. Each scene contains 1 or 2 of the 4 polarisation bands, depending on the polarisation settings of the instrument. Possible combinations are single band VV or HH, and dual bands VV+VH and HH+HV.

SAR imagery has instruments that actively transmit microwave signals independently so it does not require sunlight to assist in recording on the earth's surface. SAR actively transmits microwave signals to the earth and receives a portion of the transmitted energy as backscatter from the ground.
SAR instruments provide radar backscatter measurements that are influenced by the terrain structure and surface roughness of the object. The rougher the structure on the ground, the greater the backscatter. A rough surface will scatter energy and return it back to the antenna, resulting in back to the antenna resulting in bright features. Flat surfaces reflect the signal resulting in dark features. Similarly, more structurally complex targets such as forests will appear brighter as the interaction of the signal with leaves, branches and trunks will result in a higher proportion of the signal being transmitted back to the sensor.

## Sentinel 2A
A mapping study on mangroves from optical remote sensing imagery data Sentinel-2A optical imagery was conducted using multiple band composites. Band composites are required to visually display the spectrum of the spectrum of reflected waves that have different characteristics and band compositions from Sentinel-2A. of Sentinel-2A. Band composites on Sentinel-2A that are suitable for mapping mangrove studies are the false colour composite bands RGB 8A-11-4 and 8A-12-2. This false colour composite is able to present mangrove objects than true colour composites because of the characteristics of mangroves are able to reflect the red-green infrared spectrum and absorb the blue-red colour spectrum (8A-11-4 and 8A-12-2). absorb the blue-red colour spectrum (Dharmawan et al., 2020).

![index](https://github.com/aldearizka99/MangroveIKN/assets/57086261/366000b5-57a1-41f2-8584-8225dd4068cb)

Figure 1. Display of Composite Bands on Sentinel-2A Image, (a) True Colour Composite 4- 3-2, (b) False Colour Composite 8A-11-4, (c) False Colour Composite 11-8-4 

## Supervised Classification Using Random Forest 

Determination of spectral indices is carried out as a reference reference for the classification of mangrove ecosystem land cover using the Random Forest algorithm model. The determination of this index will be processed to find out how influential the variables used in the classification using random forest. The spectral index uses several indices such as NDVI (Normalized Difference Vegetation Index), MNDWI (Modified Normalized Difference Water Index), LSWI (Land Surface Water Index), SAVI (Soil-Adjusted Vegetation Index), NDBI (Normalized Difference Built-Up Index), and Sentinel-1 VV and VH polarisation.

Classification Random Forest is a supervised classification method that requires a pixel sampling process. In addition to the samples samples, some predefined spectral indices are required to be used as a modelling reference because there are to be a modelling reference because there are several land cover classes with different pixel values. The classes land cover classes required for classification include, among others, Mangrove Vegetation Mangrove Vegetation, Non-mangrove Vegetation, Built-up Land, Open Land, and Water Body. Open Land, and Water Body.

![map](https://github.com/aldearizka99/MangroveIKN/assets/57086261/ad25fd89-89d1-406a-8884-d204bd56a2ab)

Figure. 2 Random Forest Classification Land Change Map, (a) Land Cover Map in 2019, (b) Land Cover Map in 2022, (c) Land Change Map in 2019 and 2022

The results showed that the dominance of land cover area in 2019 and 2022 was in the non-mangrove vegetation class of 102,014.078 Ha and 108,166.27 Ha. The results of mangrove vegetation land cover class are obtained for processing vegetation density level using NDVI index with sparse, moderate, and dense density. It is identified that the mangrove ecosystem in Balikpapan Bay is dominated by dense vegetation density with an area in 2019 of 14.985,81 Ha and in 2022 of 10.661,27 Ha. The result of accuracy test conducted in 2019 amounted to 88.89% and in 2022 amounted to 91.67%.

![image](https://github.com/aldearizka99/MangroveIKN/assets/57086261/f6daf677-0733-40e2-982b-ec1ab61d4424)

Figure 3. Land Cover Class Area of Mangrove Ecosystem in 2019 and 2022


## Mangrove Vegetation Density 
Classification of mangrove vegetation density was processed using using the NDVI index to determine the level of greenness on the mangrove objects studied. Classification of mangrove vegetation density is determined based on the threshold to get the density class. canopy density class. Vegetation canopy density class is divided into 3 class, sparse density, moderate density, and dense density. Processing of mangrove vegetation density in 2019 and 2022 resulted in the calculation of reductions and additions to mangrove land. It aims to determine changes in mangrove land during the period of 3 years.

![image](https://github.com/aldearizka99/MangroveIKN/assets/57086261/664bddf1-1504-4d9a-8e17-732c34bdc1c4)

Figure 4. NDVI Classification Threshold Class

![image](https://github.com/aldearizka99/MangroveIKN/assets/57086261/3c10f0ff-1d72-4364-ac55-9a5bb8bb2608)

Figure 5. Classification of Mangrove Vegetation (a) Mangrove Forest Change Map 2019 and 2022, (b) Classification of Mangrove Vegetation Density in 2019, (c) Classification of Mangrove Vegetation Density in 2022.


### Data Requirement
- Sentinel-2 MSI: MultiSpectral Instrument, Level-2A
- Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected di-import
- SRTM DEM

### Literature
- Chen, B., Xiao, X., Li, X., Pan, L., Doughty, R., Ma, J., Dong, J., Qin, Y., Zhao, B., Wu, Z., Sum, R., Lan, G., Xie, G., Clinton, N., & Giri, C. (2015). A mangrove forest map of China in 2015: Analysis of time series Landsat 7/8 and Sentinel-1A imagery in Google Earth Engine cloud computing platform. Chinese Academy of Tropical Ag. 1–53
- Dharmawan, I.W.E., Suyarso, I.U., Yaya, P. B. & P. (2020). Panduan Monitoring Struktur Komunitas Mangrove di Indonesia. Bogor: PT Media Sains Nasional.
- Rijal, S. S., Pham, T. D., Noer’Aulia, S., Putera, M. I., & Saintilan, N. (2023). Mapping Mangrove Above-Ground Carbon Using Multi-Source Remote Sensing Data and Machine Learning Approach in Loh Buaya, Komodo National Park, Indonesia. Forests, 14(1). https://doi.org/10.3390/f14010094.
