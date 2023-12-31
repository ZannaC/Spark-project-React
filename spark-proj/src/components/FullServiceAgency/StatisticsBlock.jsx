// import graphic from "../../assets/images/fullServiceAgency/graphic.png";
import React from "react";
import globe from "../../assets/images/fullServiceAgency/globe.png";
import StatisticsChart from "./StatisticsChart/StatisticsChart";

import "./fullServiceAgency.css";

const StatisticsBlock = (props) => {
  return (
    <div className="full-service-agency-columns">
      <div className="full-service-agency-statistics">
        <h5>
          Every business is different and its marketing needs are too. We've
          developed a diverse range of specialised services to ensure success.
          We bring together exceptional, in-house expertise to deliver fast,
          effective results to elevate your business.
        </h5>
        <span className="bold-text">
          Our Expertise in Design & Development Softwares
        </span>
        <h5>
          Always striving toward ideals. Being true to our values. Clients and
          beyond.
        </h5>
        <StatisticsChart />
      </div>
      <div className="full-service-agency-globe">
        <img src={globe} alt="Statistics" />
      </div>
    </div>
  );
};
export default StatisticsBlock;
