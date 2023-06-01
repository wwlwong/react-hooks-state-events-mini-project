import React from "react";

function Task({key, task, handleDelete}) {
  return (
    <div className="task" key={key}>
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => handleDelete(task.text)} >X</button>
    </div>
  );
}

export default Task;
