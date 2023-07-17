import home from "../../assets/images/dropDownMenu/home.svg";
import coffee from "../../assets/images/dropDownMenu/coffee.svg";
import services from "../../assets/images/dropDownMenu/services.svg";
import contactUs from "../../assets/images/dropDownMenu/contactUs.svg";
import pricing from "../../assets/images/dropDownMenu/pricing.svg";
import "./dropDownMenu.css";

function TopicBlock() {
  const list = [
    {
      image: home,
      title: "Home",
      id: 1,
    },
    {
      image: coffee,
      title: "Products",
      id: 2,
    },
    {
      image: services,
      title: "Services",
      id: 3,
    },
    {
      image: contactUs,
      title: "Contact Us",
      id: 4,
    },
    {
      image: pricing,
      title: "Pricing",
      id: 5,
    },
  ];

  return (
    <ul>
      {list.map((topic, id) => (
        <li>
          <a href="top#">
            <img className="icon" alt="topic-icon" src={topic.image} />
            {topic.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default TopicBlock;
