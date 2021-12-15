import React, { useState } from "react";
import {API_URL} from '../../config';
import "./Search.css";

export default function Search({ cb = Function.prototype }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchTerm = (e) => {
    let term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const handleSearch = () => {
    if (searchTerm) {
     cb(searchTerm);
    }
  };

  //search by Enter press
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="row">
        <div className="input-field col s12">
          <input
            type="text"
            className="validate"
            placeholder="Search by category..."
            maxLength="130"
            value={searchTerm}
            onChange={handleSearchTerm}
            onKeyPress={handleKey}
            onClick={() => {
              setSearchTerm("");
            }}
          />

          <button
            className="btn search-btn teal darken-1 "
            onClick={() => handleSearch()}
          >
            <i className="material-icons">search</i>
          </button>
        </div>
      </div>
    </>
  );
}
