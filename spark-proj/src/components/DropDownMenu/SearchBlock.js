import search from "../../assets/images/dropDownMenu/search.svg";
import DropDown from "./DropDown";
import "./dropDownMenu.css";

const SearchBlock = (props) => {
  return (
    <header className="drop-down-menu-container">
      <button type="button" onClick={props.onCancel} className="close-btn">
        ✖
      </button>
      <div className="search-close-block">
        <button className="search-btn">
          <a href="top#">
            <img src={search} alt="search icon" />
          </a>
        </button>
      </div>

      <DropDown />
    </header>
  );
};
export default SearchBlock;
