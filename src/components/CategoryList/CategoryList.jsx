import React from "react";
import "./CategoryList.css";
import CategoryItem from "../CategoryItem/CategoryItem";

export default function CategoryList({ catalog = [] }) {
  return (
    <div className="categoryList">
      {catalog.map((item) => (
        <CategoryItem key={item.idCategory + Math.floor(Math.random() * 1000000)} {...item} />
      ))}
    </div>
  );
}
Math.floor(Math.random() * 1000000)