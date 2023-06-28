import logo from "../../assets/images/header/creativeSparkLogo.svg";
import burger from "../../assets/images/header/burgerMenu.svg";
import "./headerStyle.css";

function LogoBurgerMenu() {
  return (
    <div className="logo-burgerMenu">
      <img className="logo" src={logo} alt="Logo" />
      <a href="#top">
        <img className="burgerMenu" src={burger} alt="Burger menu" />
      </a>
    </div>
  );
}
export default LogoBurgerMenu;
