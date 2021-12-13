import React from "react";
import "./MealsList.css";
import Meal from "../Meal/Meal";

export default function MealList({ meals }) {
  return (
      <>
    <div className="mealsList">
      {meals.map((meal) => (
        <Meal key={meal.idMeal + Math.random()} {...meal} />
      ))}
    </div>
    </>
  );
}
