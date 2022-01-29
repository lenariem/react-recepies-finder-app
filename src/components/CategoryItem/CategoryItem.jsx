import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css";

export default function CategoryItem(props) {
  const { strCategory, strCategoryDescription, strCategoryThumb } =
    props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={`${strCategory} category`} />
      </div>
      <div className="card-content">
        <span className="card-title blue-teal text-lighten-2"><b>{strCategory}</b></span>
        <p>{strCategoryDescription.slice(0, 80)}...</p>
      </div>
      <div className="card-action center">
        <Link to={`/category/${strCategory}`} className="waves-effect waves-light btn">
          Open Category
        </Link>
      </div>
    </div>
  );
}
