import footerLogo from "../../assets/images/footer/footer-logo.svg";
import Subscribe from "./Subscribe";
import "./footerStyle.css";

function LogoSubscribeBlock() {
  return (
    <div className="logo-block">
      <div className="footer -logo">
        <img src={footerLogo} alt="FooterLogo" />
      </div>
      <div className="all-rights">
        Copyright © 2020. LogoIpsum. All rights reserved.
      </div>
      <Subscribe />
    </div>
  );
}
export default LogoSubscribeBlock;
