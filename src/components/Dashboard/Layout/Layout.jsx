import React, { useState } from "react";
import SideBar from "../Navbar/SideBar";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
   const [hideSideBar, setHideSideBar] = useState(false);
  return (
    <>
      <div
        className={`h-screen grid ${
          hideSideBar ? "grid-cols-[100px,1fr]" : "grid-cols-[300px,1fr]"
        } grid-rows-[80px,1fr] animate-wiggle`}
      >
        <div className="header col-[2/3] row-[1/2]">
          <Navbar />
        </div>
        <div className="sidebar col-[1/2] row-[1/3]">
          <SideBar hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} />
        </div>
        <div className="main bg-[#ebebeb] col-[2/3] row-[2/3] rounded-tl-2xl overflow-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
