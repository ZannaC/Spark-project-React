import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__labelValue">
        <div className="chart-bar__label">{props.label}</div>
        <div className="chart-bar__value">
          {props.value} {`%`}
        </div>
      </div>

      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ width: barFillHeight }}></div>
      </div>
    </div>
  );
};

export default ChartBar;
