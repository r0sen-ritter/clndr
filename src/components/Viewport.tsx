import React from "react";
import DateElement from "./DateElement";
import EventModal from "./EventModal";
import generateDates from "../utils/DateProcessor";
import { useState } from "react";
import "./Viewport.css";

interface ViewportProps {
  year: number;
  month: number;
}

interface EventList {
  name: string;
  startDate: Date;
  endDate: Date;
}

const Viewport: React.FC<ViewportProps> = ({ year, month }) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [eventList, setEventList] = useState<EventList[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [eventName, setEventName] = useState<string>("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  function confirmModal() {
    setEventList((previousEvents) => {
      previousEvents.push({
        name: eventName,
        startDate: startDate,
        endDate: endDate,
      });
      return previousEvents;
    });
    closeModal();
  }

  const dates = generateDates(year, month + 1, 0);

  return (
    <div className="viewport wrapper">
      {dates.map((date, index) => {
        return (
          <DateElement
            date={date}
            index={index}
            openModal={openModal}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            eventList={eventList}
          />
        );
      })}
      {modalIsOpen === true && (
        <EventModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          confirmModal={confirmModal}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setEventName={setEventName}
        />
      )}
    </div>
  );
};

export default Viewport;
