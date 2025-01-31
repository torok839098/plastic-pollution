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


2. Create map with markers to identify the top 1,000 locations that contribute to the plastic pollutions of river inputs around the world using Folium:  
[folium_heatmap_marker.ipynb](https://github.com/mjardinico/plastic-pollution/blob/main/folium_heatmap_marker.ipynb)
    
    <!-- ![Plastic Pollution River Input Heatmap](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/40000_locations_river_inputs.png) -->

     ![Top 1000 locations that contribute to Plastic Pollution in oceans](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/top_1000_river_inputs.png)

3. Create interactive charts that displays years, location from a dropdown menu using JavaScript and D3.js. Refer to codes inside `static/`, `templates/` folders
    ![](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/Flask_app_img.png)


4. Enhance visualization of page using CSS file in `static/` folder. Insert JavaScript file and CSS file into HTML. 

5. Render HTML within the Flask app file `app.py`. JS and CSS files must be in static folder and HTML file must be in templates folder.

6. Using the `counter.css` in `static/` and `counter.html` in `templates/` add `<iframe>` to create the plastic bag counter being produced worldwide. 
    [Plastic Bag Counter Produced Worldwide](https://plastic-pollution-1b0465c24684.herokuapp.com/bagcounter) 


### References
`Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. – processed by Our World in Data. “Plastic waste emitted to the ocean per capita” [plastic-pollution- Mismanaged plastic waste to ocean per capita (kg per year)]. Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. [original data].`

National Oceanic and Atmospheric Administration:
National Centers for Environmental Information provided Marine Microplastics Map Portal data [MarineMicroplastics.geojson,MarineMicroplastics_beaches.geojson](https://www.ncei.noaa.gov/products/microplastics)
NOAA/ National Centers for Environmental Information (NCEI) (2022): Microplastics Database . [indicate subset used]. NOAA National Centers for Environmental Information. Accessed [date].

`Data Usage Disclaimer: Microplastics vary in origin, density, chemical properties, morphology, size and color. At present, there is no single combination of methods for sampling, extracting, analyzing, and reporting. Thus, the microplastic concentrations in the database may not always be comparable across studies. Users should consider the metadata in the archives which contain more details about the data records (such as sampling protocols and instrumental analysis) for further usability of the data.`

### Acknowledgements / Credits
1. [plasticriverinput.csv](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/plasticriverinput_area.csv). 
`Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. – processed by Our World in Data`

2. 