import React from "react";
import DateElement from "./DateElement";
import AddEventModal from "./AddEventModal";
import ShowEventsModal from "./ShowEventsModal";
import generateDates from "../utils/DateProcessor";
import { useState } from "react";
import "./Viewport.css";

interface ViewportProps {
  year: number;
  month: number;
}

interface EventRecord {
  name: string;
  startDate: Date;
  endDate: Date;
}

const Viewport: React.FC<ViewportProps> = ({ year, month }) => {
  const [AddEventModalIsOpen, setAddEventModalIsOpen] =
    useState<boolean>(false);
  const [ShowEventsModalIsOpen, setShowEventsModalIsOpen] =
    useState<boolean>(false);

  const [eventList, setEventList] = useState<EventRecord[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [eventName, setEventName] = useState<string>("");
  const [currentEventList, setCurrentEventList] = useState<EventRecord[]>([]);

  const openAddEventModal = () => {
    setAddEventModalIsOpen(true);
  };

  const closeAddEventModal = () => {
    setAddEventModalIsOpen(false);
  };

  const openShowEventsModal = (foundEvents: EventRecord[]) => {
    setCurrentEventList(foundEvents);
    setShowEventsModalIsOpen(true);
  };

  const closeShowEventsModal = () => {
    setShowEventsModalIsOpen(false);
  };

  function confirmAddEventModal() {
    if (eventName === "") {
      alert("Please enter an event name");
      return;
    } else {
      setEventList((previousEvents) => [
        ...previousEvents,
        {
          name: eventName,
          startDate: startDate,
          endDate: endDate,
        },
      ]);
      setEventName("");
      closeAddEventModal();
    }
  }

  const dates = generateDates(year, month + 1, 0);

  return (
    <div className="viewport wrapper">
      {dates.map((date, index) => {
        return (
          <DateElement
            date={date}
            index={index}
            openAddEventModal={openAddEventModal}
            openShowEventsModal={openShowEventsModal}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            eventList={eventList}
            key={index}
          />
        );
      })}
      {AddEventModalIsOpen === true && (
        <AddEventModal
          AddEventModalIsOpen={AddEventModalIsOpen}
          closeAddEventModal={closeAddEventModal}
          confirmAddEventModal={confirmAddEventModal}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setEventName={setEventName}
        />
      )}
      {ShowEventsModalIsOpen === true && (
        <ShowEventsModal
          ShowEventsModalIsOpen={ShowEventsModalIsOpen}
          closeShowEventsModal={closeShowEventsModal}
          currentEventsList={currentEventList}
        />
      )}
    </div>
  );
};

export default Viewport;
