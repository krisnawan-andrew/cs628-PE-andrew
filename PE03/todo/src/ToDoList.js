import React, { useState } from "react";
import ToDoTask from './ToDoTask'
import './ToDo.css'

// component for the list
function ToDoList() {

    const [tasks, setTasks] = useState([]);     // array for tasks
    const [newTask, setNewTask] = useState('');         // state variable for a new task
    
    // Reference: https://react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array
    // function to add a new task
    const addTask = () =>  {
        if(newTask.trim() !== "") {     // check to not enter empty string
            setTasks([...tasks, newTask]);     // create a copy with newTask added
            setNewTask("")      // to reset the input field
        }        
    };

    // function to delete a task
    const deleteTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index))   // use filter to create a new array by filtering out the task
    }

    return (
        <div className="todo-div">
            <h1>ToDo List App</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button className="add-button" onClick={addTask}>Add Task</button>
           
           <ul>
                {tasks.length === 0 ? (     // Need to check if list is empty! if list is empty
                    <p>No tasks available.</p>      // print no tasks
                ) : (                       // else
                    tasks.map((task, index) => (     // map tasks passing index, task, and deleteTask to ToDoTask
                        <ToDoTask key={index} task={task} deleteTask={deleteTask} index={index}/>
                    ))
                )}
           </ul>
        </div>
    );   
}

export default ToDoList;