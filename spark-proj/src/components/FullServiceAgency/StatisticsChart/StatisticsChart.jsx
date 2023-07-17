import React from "react";
import Chart from "./Chart";

const StatisticsChart = (props) => {
  const chartDataPoints = [
    { label: "GRAPHIC DESIGNING", value: 73 },
    { label: "WEBSITE DESIGN DEVELOPMENT", value: 100 },
    { label: "MOBILE APPLICATION DEVELOPMENT", value: 95 },
    { label: "PRINTING", value: 15 },
  ];

  return <Chart dataPoints={chartDataPoints} />;
};

export default StatisticsChart;
