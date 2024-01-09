import React from "react";
import "./Viewport.css";
import DateElement from "./DateElement";
import generateDates from "../utils/DateProcessor";

const Viewport = () => {
  const dates = generateDates(2024, 3, 0);
  return (
    <div className="viewport wrapper">
      {dates.map((date, index) => {
        return <DateElement date={date} index={index} />;
      })}
    </div>
  );
};

export default Viewport;
