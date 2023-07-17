import Facebook from "../../assets/images/footer/Facebook.svg";
import Twitter from "../../assets/images/footer/Twitter.svg";
import LinkedIn from "../../assets/images/header/LinkedIn.svg";
import Instagram from "../../assets/images/footer/Instagram.svg";

import "./headerStyle.css";

const socialMediaData = [
  {
    image: Facebook,
  },
  {
    image: Twitter,
  },
  {
    image: LinkedIn,
  },
  {
    image: Instagram,
  },
];

function SocialMedia() {
  return (
    <div className="socialMedia-header">
      {socialMediaData.map((data, index) => (
        <a href="#top" key={index}>
          <img src={data.image} alt="'"></img>
        </a>
      ))}
    </div>
  );
}
export default SocialMedia;
