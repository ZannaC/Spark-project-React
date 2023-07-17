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
        <h3>{props.theme}</h3>
        <p>{props.info}</p>
        <form action="https://www.w3schools.com" target="blank">
          <button type="submit" className="whatWeOffer-btn">
            <h3 className="green-text">Learn More</h3>
            <img src={imgArrowRight} alt="arrow" />
          </button>
        </form>
      </div>
    </div>
  );
}
export default OneBlock;
