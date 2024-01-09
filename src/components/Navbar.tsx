import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";
import { addMonths, subMonths, format, startOfMonth } from "date-fns";
import "./Navbar.css";

interface NavbarProps {
  date: Date;
  setDate: (date: Date) => void;
}

const Navbar: React.FC<NavbarProps> = ({ date, setDate }) => {
  const clickBackHandler = () => {
    setDate(subMonths(date, 1));
  };
  const clickForwardHandler = () => {
    setDate(addMonths(date, 1));
  };
  const clickTodayHandler = () => {
    setDate(startOfMonth(new Date()));
  };

  return (
    <div className="navbar">
      <div className="current-month">{format(date, "MMMM yyyy")}</div>
      <div className="section">
        <button className="btn" onClick={clickBackHandler}>
          <FaChevronLeft />
        </button>
      </div>
      <div className="section">
        <button className="btn" onClick={clickForwardHandler}>
          <FaChevronRight />
        </button>
      </div>
      <div className="section">
        <button className="btn" onClick={clickTodayHandler}>
          <TbCurrentLocation />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
