import React from "react";
import { Link } from "react-router-dom";
import './backBtn.css';

export default function BackBtn() {
  return (
    <div className="backBtn">
      <Link className="btn" to="/">
        <i className="material-icons rightMargin">arrow_back</i>Go back to main
        page
      </Link>
    </div>
  );
}
