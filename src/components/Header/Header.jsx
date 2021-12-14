import React from "react";
import "./Header.css";
import Logo from "../../img/logo.svg";
import GitIcon from "../../img/github.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className=" yellow darken-3">
        <div className="nav-wrapper  yellow darken-3">
          <div className="brand-logo">
             <NavLink to="/"><img src={Logo} alt="logo" className="logoIcon" title="home page"/></NavLink>
          </div>
          <span className="logoText">What would you like to cook today?</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down ts-16">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <a
                href="https://github.com/lenariem/react-recepies-finder-app"
                title="Repo on GitHub"
                target="blank"
                className="transparent"
              >
                <img src={GitIcon} alt="github link" className="gitIcon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
