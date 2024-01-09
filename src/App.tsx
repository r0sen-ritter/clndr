import React from "react";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Viewport from "./components/Viewport";
import Rightbar from "./components/Rightbar";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2024);

  return (
    <>
      <div className="appbg">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Navbar currentMonth={month} currentYear={year} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Leftbar />
          <Viewport />
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default App;
