import React, { useState }  from "react";
import Task from "./Task";

function NewTaskForm({categories, onTaskFormSubmit }) {
  const optionCategories = categories.filter((category) => category !== "All")
  const [taskName, setTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('Code');
  
  function handleTextInput(event){
    setTaskName(event.target.value);
  }
  
  function handleCategorySelection(event){
    setTaskCategory(event.target.value);
  }
  
  function handleFormSubmit(event){
    event.preventDefault();
    const newTask = {
      text : taskName,
      category : taskCategory,
    }
    onTaskFormSubmit(newTask);
    setTaskName('')
    setTaskCategory('Code')
  }
  
  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input onChange={handleTextInput} type="text" name="text" value={taskName}/>
      </label>
      <label>
        Category
        <select onChange={handleCategorySelection} name="category" value={taskCategory}>
          {optionCategories.map((category,index) => 
          <option key={index} value={category}>{category}</option> /* render <option> elements for each category here */
        )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
