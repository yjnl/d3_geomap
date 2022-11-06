# d3_geomap
Created as part of an assignment for AC50002 at the University of Dundee, Fall 2022

UK geomap data obtained from gadm.org/download_country.html, simplified using mapshaper.org, and the geojson file rewound through observablehq.com/@bumbeishvili/rewind-geojson

The projection and path generating code used to draw the UK map from d3 was adapted from https://www.d3indepth.com/geographic/

Current Features:

 - Draws a map of the UK from geojson data
 - Gets data of UK towns from a website
 - Plots UK town data as circles on the map
 - Circles scale on size based on population
 - A button that when clicked, gets new data and redraws the circles


 - A tooltip that appears when the circles are hovered over,
       showing details of that town contained in the data file
 - Animations of the circles that play whenever the data is loaded
 - A slider bar that allows the user to select the number of towns to load
       and reloads the data and redraws a new number of circles
       when the slider knob is let go of


 - Text that displays how many cities are currently being displayed,
       that updates when the slider bar is moved
 - Circles change appearance to let the user know which town is being hovered on,
       and on hover, shows the position of the town with greater precision


Potential Future Features:

 - An automatic zoom functionality that allows the user to view the map 
       from closer up, while being able to control which part of the map
       they view when the mouse is moved
 - Different types of map projections
 - Automatic scaling of textbox width depending on length of the text inside 


 - Further code optimizations
 - Debugging of bugs yet to be identified

