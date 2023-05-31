import React from "react";
import { v4 as uuid } from "uuid"; 
import Task from "./Task";

function TaskList( {tasks} ) {
  
  const tasksToDisplay = tasks.map((task) => {
    return true;
  })

  return (
    <div className="tasks">
      <ul>{tasks.map((task) =>(
        <Task key={uuid} category={task.category} task={task.text} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
