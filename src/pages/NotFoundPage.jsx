import React from "react";
import { Link } from "react-router-dom";
/* import BackBtn from "../components/BackBtn";
import CatNotFound from "../img/cat.jpg"; */

export default function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <h1>Page not found</h1>
      <h5 style={{ color: "#b71c1c" }}>Not Found</h5>
      {/* <img className="notFoundImg" src={CatNotFound} alt="cat in cinema" /> */}
      <br />
      <br />
      <div className="backBtn">
      <Link className="btn" to="/">
        <i className="material-icons rightMargin">arrow_back</i>Go back to main
        page
      </Link>
    </div>
    </div>
  );
}
