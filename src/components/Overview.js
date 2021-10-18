//should render tasks
import React from "react";
import './Overview.css'

const Overview = (props) => {
    const {tasks} = props;
    const {deleteEvent} = props;


    function onEditClick(e) {
        alert("Edit is currently out of office :)");
      }

    return (
    <div className="taskList"> 
        
            {tasks.map((task) => {
                return (
            <div className="taskItem">
                <p>{task.taskNumber}</p>
                <li className="taskListItem" key={task.id}>{task.text}</li>
                <button onClick = {onEditClick} className="editButton" id={task.taskNumber}>Edit</button>
                <button onClick = {deleteEvent} className="deleteButton" id={task.taskNumber}>Delete</button>
                
            </div>
                );
                
            })}
        
    </div>
    );
};

export default Overview;