import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList"; 
import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [Tasks, setTasks] = useState(TASKS)

  function handleDelete(text){
    const newTaskList = Tasks.filter((task) => task.text !== text);
    setTasks(newTaskList); 
  }

  function onTaskFormSubmit(newTask){
    setTasks([...Tasks, newTask])  
  }


  const displayTasks = Tasks.filter((task)=> {
    if (selectedCategory === "All") return true;
    return selectedCategory === task.category;
    }
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} handleCategorySelection={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={displayTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
