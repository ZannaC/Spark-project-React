import search from "../../assets/images/dropDownMenu/search.svg";
import closeBtn from "../../assets/images/dropDownMenu/closeBtn.svg";
import "./dropDownMenu.css";

function SearchBlock() {
  return (
    <div className="search-close-block">
      <div class="search-btn">
        <a href="top#">
          <img src={search} alt="search icon" />
        </a>
      </div>
      <div class="close-btn">
        <a href="top#">
          <img src={closeBtn} alt="close button" />
        </a>
      </div>
    </div>
  );
}
export default SearchBlock;
