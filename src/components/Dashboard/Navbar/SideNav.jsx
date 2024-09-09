import React from 'react'
import { NavLink } from 'react-router-dom';

const SideNav = ({ to, iconClass, label }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-white bg-[#f2707f] rounded-xl"
          : "hover:bg-[#f2707f] hover:text-white rounded-xl"
      }
      to={to}
    >
      <li className="flex gap-5 items-center py-2 px-3 cursor-pointer">
        <i className={`${iconClass} pt-1 text-xl`}></i>
        <h1 className="text-base font-Poppins">{label}</h1>
      </li>
    </NavLink>
  );
};

export default SideNav
