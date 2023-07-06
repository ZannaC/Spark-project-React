import logo from "../../assets/images/header/creativeSparkLogo.svg";
import burger from "../../assets/images/header/burgerMenu.svg";
import "./headerStyle.css";

function LogoBurgerMenu() {
  return (
    <div className="logo-burgerMenu">
      <img className="logo" src={logo} alt="Logo" />
      <form>
        <button type="submit" class="burgerMenu">
          <img src={burger} alt="Burger menu" />
        </button>
      </form>
    </div>
  );
}
export default LogoBurgerMenu;
