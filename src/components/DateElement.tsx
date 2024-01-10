import React from "react";
import { getDay, getDate, getMonth, isToday, setSeconds } from "date-fns";
import "./DateElement.css";

interface DateElementProps {
  date: Date;
  index: number;
  openModal: () => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
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
  setStartDate,
  setEndDate,
}) => {
  const isCurrentDate = isToday(date);

  const onClickhandler = () => {
    setStartDate(date);
    setEndDate(date);
    openModal();
  };

  return (
    <div
      className={`date-element ${isCurrentDate ? "current-date" : ""}`}
      onClick={onClickhandler}
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
