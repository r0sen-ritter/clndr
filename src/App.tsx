import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Viewport from "./components/Viewport";
import Rightbar from "./components/Rightbar";
import { useState } from "react";
import { startOfMonth } from "date-fns";
import "./App.css";

const App = () => {
  const [date, setDate] = useState<Date>(startOfMonth(new Date()));

  return (
    <>
      <div className="app-bg">
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
