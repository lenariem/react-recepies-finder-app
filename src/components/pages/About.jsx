import React from "react";

export default function About(){
  return (
      <div className="about">
        <h1>About this app</h1>
        <h5>
          App version: <strong>1.0.0</strong>
        </h5>
        <p> © {new Date().getFullYear()} Copyright Elena Riemer</p>
      </div>
  );
};
