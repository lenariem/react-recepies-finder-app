import React from "react";
import "./Header.css";
/* import Logo from "../../img/logo.svg"; */
import GitIcon from "../../img/github.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="deep-orange lighten-1">
        <div className="nav-wrapper deep-orange lighten-1">
          <div className="brand-logo" onClick={() => window.location.reload()}>
            {/*  <img src={Logo} alt="logo" className="logoIcon" /> */}
          </div>

          <span className="logoText">IT BOOKS</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a
                href="https://github.com/lenariem/react-recepies-finder-app"
                title="Repo on GitHub"
                target="blank"
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
