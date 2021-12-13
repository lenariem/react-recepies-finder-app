import React from "react";
import "./MealsList.css";
import Meal from "../Meal/Meal";
import BackBtn from "../backBtn/BackBtn";

export default function MealList({ meals }) {
  return (
      <>
      <div className="row">
        <p>Found {meals.length} recipes</p>
        <BackBtn />
      </div>
    <div className="mealsList">
      {meals.map((meal) => (
        <Meal key={meal.idMeal + Math.random()} {...meal} />
      ))}
    </div>
    </>
  );
}
