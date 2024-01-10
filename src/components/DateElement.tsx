import React from "react";
import { getDay, getDate, getMonth, isToday } from "date-fns";
import "./DateElement.css";

interface DateElementProps {
  date: Date;
  index: number;
  openModal: () => void;
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

const DateElement: React.FC<DateElementProps> = ({
  date,
  index,
  openModal,
}) => {
  const isCurrentDate = isToday(date);
  return (
    <div
      className={`date-element ${isCurrentDate ? "current-date" : ""}`}
      onClick={openModal}
    >
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
