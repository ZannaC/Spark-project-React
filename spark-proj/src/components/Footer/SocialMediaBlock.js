import Facebook from "../../assets/images/footer/Facebook.svg";
import Instagram from "../../assets/images/footer/Instagram.svg";
import Twitter from "../../assets/images/footer/Twitter.svg";
import backToTop from "../../assets/images/footer/back-to-top.svg";
import "./footerStyle.css";

function SocialMediaBlock() {
  return (
    <div class="btn-socialMedia">
      <div className="back-to-top-btn">
        <a href="#top">
          <img src={backToTop} alt="back To Top" />
        </a>
      </div>
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
