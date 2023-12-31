import Facebook from "../../assets/images/footer/Facebook.svg";
import Instagram from "../../assets/images/footer/Instagram.svg";
import Twitter from "../../assets/images/footer/Twitter.svg";

import "./footerStyle.css";

function SocialMediaBlock() {
  return (
    <div className="btn-socialMedia">
      <form action="https://www.w3schools.com" target="blank">
        <button type="submit" className="back-to-top-btn">
          &gt;
        </button>
      </form>
      <div className="socialMedia">
        <a href="#top">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="#top">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="#top">
          <img src={Instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  );
}
export default SocialMediaBlock;
