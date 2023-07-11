import React, { useState } from "react";
import search from "../../assets/images/dropDownMenu/search.svg";
import DropDown from "./DropDown";
import "./dropDownMenu.css";

const SearchBlock = (props) => {
  const [searchData, setSearchData] = useState({ search: "" });

  const onChangeSearch = (event) => {
    setSearchData((currentData) => ({
      ...currentData,
      search: event.target.value,
    }));
  };

  return (
    <header className="drop-down-menu-container">
      <button type="button" onClick={props.onCancel} className="close-btn">
        ✖
      </button>
      <div className="search-block">
        <div className="search-input-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="Type here to search"
            value={searchData.search}
            onChange={onChangeSearch}
          />
          <a href="https://www.w3schools.com" target="blank">
            <img src={search} alt="search icon" className="search-icon" />
          </a>
        </div>
      </div>

      <DropDown />
    </header>
  );
};
export default SearchBlock;
