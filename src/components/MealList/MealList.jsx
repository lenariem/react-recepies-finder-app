import React from "react";
import "./MealsList.css";
import Meal from "../Meal/Meal";
import BackBtn from "../backBtn/BackBtn";

export default function MealList({ meals }) {
  return (
      <React.Fragment key={Math.floor(Math.random() * 10000000)}>
      <div className="row">
        <p>Found {meals.length} recipes</p>
        <BackBtn />
      </div>
    <div className="mealsList">
      {meals.map((meal) => (
        <Meal key={meal.idMeal + Math.floor(Math.random() * 1000000)} {...meal} />
      ))}
    </div>
    </React.Fragment>
  );
}
