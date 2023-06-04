import React from "react";

function CategoryFilter( {categories, handleCategorySelection, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((category,index) => {
          return <button key={index} className={selectedCategory===category?'selected':''} onClick={()=>{handleCategorySelection(category)}}>{category}</button>
        })
        }
        
    </div>
  );
}

export default CategoryFilter;
