import React from "react";
import "./CategoryList.css";
import CategoryItem from "../CategoryItem/CategoryItem";

export default function CategoryList({ catalog = [] }) {
  return (
    <div className="categoryList">
      {catalog.map((item) => (
        <CategoryItem key={item.idCategory + Math.random()} {...item} />
      ))}
    </div>
  );
}
