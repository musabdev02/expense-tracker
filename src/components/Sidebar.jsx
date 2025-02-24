import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// ICONS
import { MdOutlineCategory } from "react-icons/md";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";

const Sidebar = () => {
  let location = useLocation();

  return (
    <section className="w-[16%] h-screen bg-[#f0f7ff]">
      <div className="py-20">
        <div className="logo px-12 flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-10" />
          <h3 className="font-bold text-xl tracking-tight leading-5">Spend <br /> Wise</h3>
        </div>
        <div className="flex flex-col gap-4 mt-12 text-center px-6">
            <Link to={"/"} className={`cursor-pointer flex items-center gap-4 ${location.pathname === "/" ? "bg-blue-300 hover:bg-blue-300" : ""} hover:bg-blue-100 p-3 rounded-lg`}>
                <span><IoHomeOutline size={22} /></span>
                <p className="text-lg">Home</p>
            </Link>
            <Link to={"/categories"} className={`cursor-pointer flex items-center hover:bg-blue-100 gap-4 p-3 rounded-lg ${location.pathname === "/categories" ? "bg-blue-300 hover:bg-blue-300" : ""}`}>
                <span><MdOutlineCategory size={22} /></span>
                <p className="text-lg">Categories</p>
            </Link>
            <Link to={"/statistics"}className={`cursor-pointer flex items-center hover:bg-blue-100 gap-4 p-3 rounded-lg ${location.pathname === "/statistics" ? "bg-blue-300 hover:bg-blue-300" : ""}`}>
                <span><FaRegChartBar size={22} /></span>
                <p className="text-lg">Statistics</p>
            </Link>
            <Link to={"/settings"} className="cursor-pointer flex items-center hover:bg-blue-100 gap-4 p-3 rounded-lg">
                <span><IoSettingsOutline size={22} /></span>
                <p className="text-lg">Settings</p>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
