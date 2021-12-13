import React from "react";
import { Link } from "react-router-dom";
import BackBtn from "../backBtn/BackBtn";
/* import CatNotFound from "../img/cat.jpg"; */

export default function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <h1>Page not found</h1>
      {/* <img className="notFoundImg" src={CatNotFound} alt="cat in cinema" /> */}
      <br />
      <br />
      <BackBtn />
    </div>
  );
}
