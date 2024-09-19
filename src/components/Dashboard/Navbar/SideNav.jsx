import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ to, iconClass, label, hideSideBar }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `text-white bg-[#f2707f] ${
              hideSideBar ? "rounded-full" : "rounded-xl"
            }`
          : `hover:bg-[#f2707f] hover:text-white ${
              hideSideBar ? "rounded-full" : "rounded-xl"
            }`
      }
      to={to}
    >
      {!hideSideBar && (
        <li className="flex gap-5 items-center p-3 cursor-pointer w-full">
          <i className={`${iconClass} pt-1 text-xl`}></i>
          <h1 className="text-base font-Poppins">{label}</h1>
        </li>
      )}

      {hideSideBar && (
        <li className="flex gap-5 items-center p-3 cursor-pointer relative group w-full">
          <i className={`${iconClass} pt-1 px-2 text-xl`}></i>
          <h1 className="whitespace-nowrap min-w-max bg-[#f2707f] rounded-xl drop-shadow-xl py-2 px-3 text-base font-Poppins absolute left-16 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {label}
          </h1>
        </li>
      )}
    </NavLink>
  );
};

export default SideNav;
