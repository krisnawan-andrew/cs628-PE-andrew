# PE03 - ToDo List App

# Input
The input for this project comes from the user input as a task to be added into the list. The user enters a string/text as a task to be added into the list via a text field. Clicking the "Add task" button will add this task to the bottom of the list.

# Process
ToDoTask.js component consists of a task in the form of a text and a delete button accompanying it, all written inside an HTML list tag. 

ToDoList.s component contains the array and along with the logic to add and remove tasks from it. It returns an input textbox where user can enter and an "Add task" button. The app updates the state to reflect changes made to the list by using useState.

# Output
The output is a textbox where user can enter a text to be added as a task and an "Add task" button and a dynamic list of tasks added/removed by user by clicking either the "Add task" or "Delete" button.