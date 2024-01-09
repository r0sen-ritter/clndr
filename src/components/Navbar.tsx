import React from "react";
import "./Navbar.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

interface NavbarProps {
  currentMonth: number;
  currentYear: number;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Navbar: React.FC<NavbarProps> = ({ currentMonth, currentYear }) => {
  return (
    <div className="navbar">
      <div className="current-month">
        {months[currentMonth]} {currentYear}
      </div>
      <div className="section">
        <button className="btn">
          <FaChevronLeft />
        </button>
      </div>
      <div className="section">
        <button className="btn">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
