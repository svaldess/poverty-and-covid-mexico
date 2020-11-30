# Poverty in Mexico: trends and challenges after Covid-19
## #D3 #Tableau #DataVisualization 

The main objective of this project is to visualize statistics of poverty and social deprivation in Mexico at the subnational level, from 2008 to 2018. The main factors analyzed are total population classified as poor, income levels, and access to health services. Epidemiology statistics of COVID-19 from January 1st, 2020 to July 1st, 2020, have been included in order to gain additional insights about the social effects of the pandemic. Epidemiology statistics are disaggregated by municipalities.

The main tools used for creating the visualizations were: **Google Charts API**, **D3 Java Script library** and **Tableau Public**.

The raw data was extracted from the National Council for the Evaluation of Social Development Policy and the Ministry of Health of Mexico. The data preprocessing, cleaning, and consolidation was done in Python 3.7.6. In order to create the map of municipalities, the shape files containing information about the coordinates of each municipality were pulled from the National Institute of Statistics and Geography of Mexico.


## Key findings

- From 2008 and 2018, poverty has increased significantly in some states, including Mexico City which is the second largest city in the country and has reported the largest figures of Covid-19 cases (nearly 50 thousand cases by July 1, 2020). Regions classified with a "moderate" level of poverty (many of which include middle income cities) have reported the largest figures of Covid-19 cases. **This raises concerns about the challenges that middle-income municipalities will face in the upcoming months in order to avoid a rapid increment of poverty.**

- From 2008 to 2018, the percentage of the population in Mexico with a very low income increased 17%. Currently, those municipalities (primarily urban) that have more than a 1 thousand cases of Covid-19, also have a large population of people with a very low salary. **This raises concerns about the impact of the pandemic in regions, mostly urban areas, where the population is already vulnerable due to income.**

- Finally, between 2016 and 2018, more than half of the states in Mexico reported an increment of their population without access to health services. Currently, those regions classified with a very high level of deprivation of health services, also report the largest number of deaths allegedly caused by Covid-19. **This raises concerns about the impact of the pandemic in regions where the population has previously faced limitations to access health services.**

Check the project: https://svaldess.github.io/poverty-and-covid-mexico/
