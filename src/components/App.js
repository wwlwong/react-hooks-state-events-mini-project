import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid"; 

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  //const [tasks, setTasks] = useState(TASKS);
  const taskWithId = TASKS.map(object => {
    return {...object, id: uuid()};
  });
  const [displayTasks, setDisplayTasks] = useState(taskWithId)

  function handleDelete(text){
    const newTaskList = displayTasks.filter((task) => task.text !== text);
    setDisplayTasks(newTaskList); 
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList displayTasks={displayTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
