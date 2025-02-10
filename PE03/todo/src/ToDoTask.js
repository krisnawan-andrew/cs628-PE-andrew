import React from "react";
import './ToDo.css'

// component for the task
// contains text for the task and a delete button
// will be a <li> to be added inside <ul>
function ToDoTask({ task, deleteTask, index }) {
    return (
        <div className="task">
            <li>
                {task}
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            </li>
        </div>
    );
}

export default ToDoTask;