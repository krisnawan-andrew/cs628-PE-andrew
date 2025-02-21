# PE04 - Cities

# Input
The input for this project comes from user input in AddCity component where they can enter in a city's name, country and population that makes up a City object. The cities will be saved in an array as more cities are being added into the list.

# Process
A navbar at the top of the page will have two options: Cities List and Add City. Each option will lead the user to a different URL via Routes that shows the respective component. Selecting Cities List will show the names of cities that are already in the array as a list. These names can be selected to show the country this city is in, and the population number, along with a button to go back to see the full list again (done via navigate). Selecting Add City will give user the option to save a new city by entering its name, country, and population. Pressing the Add City button will route the user back to the cities list again.

# Output
The output is a list of city names that are selectable to show its full information of country and population number. User can add a new city into the array by selecting the Add City option at the top and entering the needed information. The user will be redirected to the new list of city names with the new addition that they made.