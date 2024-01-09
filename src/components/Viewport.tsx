import React from "react";
import "./Viewport.css";
import DateElement from "./DateElement";
import generateDates from "../utils/DateProcessor";

interface ViewportProps {
  year: number;
  month: number;
}

const Viewport: React.FC<ViewportProps> = ({ year, month }) => {
  const dates = generateDates(year, month + 1, 0);

  return (
    <div className="viewport wrapper">
      {dates.map((date, index) => {
        return <DateElement date={date} index={index} />;
      })}
    </div>
  );
};

export default Viewport;
