import React from "react";
import BackBtn from "../backBtn/BackBtn";
import NotFoundImg from "../../img/404.svg";

export default function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <h1>Page not found</h1>
      <img className="notFoundImg" src={NotFoundImg} alt="not found" />
      <br />
      <br />
      <BackBtn />
    </div>
  );
}
