import React from "react";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Viewport from "./components/Viewport";
import Rightbar from "./components/Rightbar";
import generateDates from "./utils/DateProcessor.ts";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [month, setMonth] = useState(1);

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
          <Navbar />
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
