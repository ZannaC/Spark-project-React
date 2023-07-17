import React, { useState } from "react";
import logo from "../../assets/images/header/creativeSparkLogo.svg";
import burger from "../../assets/images/header/burgerMenu.svg";
import "./headerStyle.css";
import SearchBlock from "../DropDownMenu/SearchBlock";

const BurgerMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenuHandler = () => {
    setIsOpen(true);
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="logo-burgerMenu">
      <img className="logo" src={logo} alt="Logo" />
      <form>
        {!isOpen && (
          <button
            onClick={openMenuHandler}
            type="submit"
            className="burgerMenu"
          >
            <img src={burger} alt="Burger menu" />
          </button>
        )}
      </form>
      {isOpen && <SearchBlock onCancel={closeMenuHandler} />}
    </div>
  );
};
export default BurgerMenu;
