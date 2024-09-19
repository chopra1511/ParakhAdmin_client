import React from "react";
import { NavLink } from "react-router-dom";


const HideSideNav = ({ to, iconClass, label }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-white bg-[#f2707f] rounded-xl"
          : "hover:bg-[#f2707f] hover:text-white rounded-xl"
      }
      to={to}
    >
      
    </NavLink>
  );
};

export default HideSideNav;
