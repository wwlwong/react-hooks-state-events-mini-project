import React from "react";
import Task from "./Task";

function TaskList( {displayTasks, handleDelete} ) {
  
  return (
    <div className="tasks">
      <ul>{displayTasks.map((task) =>(
        <Task key={task.key} task={task} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
