import React from "react";
import "./Navbar.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { addMonths, subMonths, format } from "date-fns";

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
    </div>
  );
};

export default Navbar;
