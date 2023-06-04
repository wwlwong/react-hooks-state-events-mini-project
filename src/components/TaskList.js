import React from "react";
import Task from "./Task";

function TaskList( {tasks, handleDelete} ) {
  
  return (
    <div className="tasks">
      <ul>{tasks.map((task, index) =>(
        <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
