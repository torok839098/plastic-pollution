##  Project 3
* Project Name: Plastic Pollution - Global Crisis
* Team Members: Judd Sanders, Michael Jardinico, Kimberly Toro, Teresa Salazar, Scott Chen
* Date Submitted: Jan 12, 2024

### Project Overview
`The primary objective of this analysis is aimed to thoroughly assess the effects of plastic pollution on the health of the global environment and ecosystems. Utilizing existing worldwide data, it reveals the stark truth that Plastic Pollution poses a considerable threat to both the global environment and health, underlining the pressing nature as an urgent global crisis. `

### Methodology
`The study utilized a comprehensive approach, incorporating a mix of quantitative and qualitative data. This included analysis of global pollution data, ecological studies, wildlife impact assessments, and socio-economic impacts of plastic waste. Furthermore, expert opinions, historical data trends, and future projections were also considered.`

### Working Files
1. Flask app - https://github.com/mjardinico/plastic-pollution/blob/main/app.py
2. HTML files - https://github.com/mjardinico/plastic-pollution/tree/main/templates
3. JavaScript / CSS files - https://github.com/mjardinico/plastic-pollution/tree/main/static
4. Jupyter Notebook files: 
    - https://github.com/mjardinico/plastic-pollution/blob/main/Resources/project_3_Teresa_mismanaged_waste.ipynb 
    - https://github.com/mjardinico/plastic-pollution/blob/main/folium_heatmap_marker.ipynb 


### Presentation Slides
[Link to Presentation Slides in PDF](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/Plastic_Pollution.pdf)



### Hosted Site (Heroku):  https://plastic-pollution-1b0465c24684.herokuapp.com/ 


### Instructions
1. Open the following code to analyze about Plastic Waster being mismanaged in the Ocean using the following: [project_3_Teresa_mismanaged_waster.ipynb](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/project_3_Teresa_mismanaged_waste.ipynb) 

    ![Mismanaged Plastic Waste in Ocean Per Capita](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/mismanaged_plastic_waste_to_ocean_per_capita.png)

2. Using the above code, create a heatmap using the Python library called Folium, where the Latitude, Longitude, Measurement are the fields to be considered in the dataset `MarineMicroplastics_oceanwater.csv`.

    ![Marine Microplast in Oceanwater](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/marine_microplastics_img.png)

3. In this project, we used Google map API geocode library called GoogleV3. Refer to [geocoordinates.ipynb](https://github.com/mjardinico/plastic-pollution/blob/main/geo_coordinates.ipynb). The code's purpose is to extract the actual geolocation names of the coordinates provided in the raw dataset /`Resources/coordinates_test2.csv`. The result is used as an input dataset in the following step #4. (Note: Google Map Geocoding API is a paid service. We have disabled our API key on this code after we have extracted the desired data.)

4. Create map with markers to identify the top 1,000 locations that contribute to the plastic pollutions of river inputs around the world using Folium:  
[folium_heatmap_marker.ipynb](https://github.com/mjardinico/plastic-pollution/blob/main/folium_heatmap_marker.ipynb)
    
    <!-- ![Plastic Pollution River Input Heatmap](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/40000_locations_river_inputs.png) -->

     ![Top 1000 locations that contribute to Plastic Pollution in oceans](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/top_1000_river_inputs.png)

5. Starting here, we will create the actual Flask app and will host in Heroku: 
Create interactive charts that display years, location from a dropdown menu using JavaScript and D3.js. Refer to codes inside `/static`, `/templates` folders
    ![](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/Flask_app_img.png)


6. Enhance visualization of page using CSS file in `/static` folder. Insert JavaScript file and CSS file into HTML. 

7. Render HTML within the Flask app file `app.py`. JS and CSS files must be in static folder and HTML file must be in templates folder.

8. Using the `counter.css` in `static/` and `counter.html` in `templates/` add `<iframe>` to create the plastic bag counter being produced worldwide. 
    [Plastic Bag Counter Produced Worldwide](https://plastic-pollution-1b0465c24684.herokuapp.com/bagcounter) 
7.Using the code, attached below to see if determine if there is a relationship between legislation types implemented and plastic waste generated. The following code also includes comparison of Global Laws Database and more information of global action on plastic pollution. Refer to references on dataset used ("Country-level plastic bag legislation....") and Global Laws.org.


### References / Credits
1. [MarineMicroplastics.geojson, MarineMicroplastics_beaches.geojson](https://www.ncei.noaa.gov/products/microplastics).
`Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. – processed by Our World in Data. “Plastic waste emitted to the ocean per capita” [plastic-pollution- Mismanaged plastic waste to ocean per capita (kg per year)]. Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. [original data].`


