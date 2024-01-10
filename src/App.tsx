import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Viewport from "./components/Viewport";
import Rightbar from "./components/Rightbar";
import { useState } from "react";
import { startOfMonth } from "date-fns";
import EventModal from "./components/EventModal";
import "./App.css";

interface EventList {
  name: string;
  startDate: Date;
  endDate: Date;
}

const App = () => {
  const [date, setDate] = useState<Date>(startOfMonth(new Date()));
  const [eventList, setEventList] = useState<EventList[]>([]);

  return (
    <>
      <div className="app-bg">
        <EventModal />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Navbar date={date} setDate={setDate} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Leftbar />
          <Viewport year={date.getFullYear()} month={date.getMonth()} />
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default App;
