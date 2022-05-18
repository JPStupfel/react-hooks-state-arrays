import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

 // const [displayFoods, setDisplayFoods] = useState(foods)

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods([...foods,newFood])
    console.log(newFood);
  }
  function handleClick(item){
    const newFoodArray = foods.map(e=> e.id===item ? {...e, heatLevel: e.heatLevel+1 } : e )
    setFoods(newFoodArray)
  }

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={()=>handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));




  return (
    <div>
      
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={(event)=>setFilterBy(event.target.value)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
