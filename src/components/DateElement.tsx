import React from "react";
import "./DateElement.css";

import { getDay, getDate, getMonth, isToday } from "date-fns";
interface DateElementProps {
  date: Date;
  index: number;
}

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DateElement: React.FC<DateElementProps> = ({ date, index }) => {
  const isCurrentDate = isToday(date);
  return (
    <div className={`date-element ${isCurrentDate ? "current-date" : ""}`}>
      {index < 7 && <div>{days[getDay(date)]}</div>}
      {getDate(date) === 1 ? (
        <div style={{ marginTop: 5 }}>
          {months[getMonth(date)]} {getDate(date)}
        </div>
      ) : (
        <div>{getDate(date)}</div>
      )}
    </div>
  );
};

export default DateElement;
