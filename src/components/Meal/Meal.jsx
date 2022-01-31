import React from "react";
import { Link } from "react-router-dom";
import "./Meal.css";

export default function Meal(props) {
  const { strMeal, idMeal, strMealThumb } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={`${strMeal} recipe`} />
      </div>
      <div className="card-content">
        <span className="card-title blue-teal text-lighten-2">
          {strMeal}
        </span>
      </div>
      <div className="card-action center">
        <Link
          to={`/meal/${idMeal}`}
          className="waves-effect waves-light btn"
        >
          Watch Recipe
        </Link>
      </div>
    </div>
  );
}
