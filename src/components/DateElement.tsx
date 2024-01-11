import React from "react";
import { getDay, getDate, getMonth, isToday, isWithinInterval } from "date-fns";
import "./DateElement.css";

interface EventRecord {
  name: string;
  startDate: Date;
  endDate: Date;
}

interface DateElementProps {
  date: Date;
  index: number;
  openModal: () => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
  eventList: EventRecord[];
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
  eventList,
}) => {
  const isCurrentDate = isToday(date);

  const isEventDate = eventList.some((event) =>
    isWithinInterval(date, { start: event.startDate, end: event.endDate })
  );

  const foundEvents = eventList.filter((event) => {
    return isWithinInterval(date, {
      start: event.startDate,
      end: event.endDate,
    });
  });

  const addEventHandler = () => {
    setStartDate(date);
    setEndDate(date);
    openModal();
  };

  const showEventsHandler = () => {
    alert(foundEvents.map((event) => event.name).join("\n"));
  };

  return (
    <div
      className={`date-element ${isCurrentDate ? "current-date" : ""}`}
      onClick={addEventHandler}
    >
      {index < 7 && <div>{days[getDay(date)]}</div>}
      {getDate(date) === 1 ? (
        <div style={{ marginTop: 5 }}>
          {months[getMonth(date)]} {getDate(date)}
        </div>
      ) : (
        <div>{getDate(date)}</div>
      )}
      {isEventDate && (
        <div className="event-indicator" onClick={showEventsHandler}>
          {foundEvents.length > 1
            ? `Has ${foundEvents.length} Events`
            : "Has 1 Event"}
        </div>
      )}
    </div>
  );
};

export default DateElement;
