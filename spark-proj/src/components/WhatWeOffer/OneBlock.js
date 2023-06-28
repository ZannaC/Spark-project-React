import imgArrowRight from "../../assets/images/whatWeOffer/arrow-right.svg";
import "./whatWeOfferStyle.css";

function OneBlock(props) {
  const backgroundImageStyle = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <div className="whatWeOffer-block">
      <div
        className="whatWeOffer-block-image"
        style={backgroundImageStyle}
      ></div>
      <div className="whatWeOffer-block-info">
        <p>{props.info}</p>
        <div className="whatWeOffer-btn">
          <h3 className="green-text">Learn More</h3>
          <a href="#top">
            <img src={imgArrowRight} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default OneBlock;
