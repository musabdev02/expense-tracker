import React from "react";
import { Link, useLocation } from "react-router-dom";
// ICONS
import { MdOutlineCategory } from "react-icons/md";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";

const Sidebar = () => {
  let location = useLocation();

  return (
    <section className="w-[100%] sm:w-[16%] sm:static z-9 fixed bottom-0 sm:h-screen bg-[#f0f7ff]">
      <div className="sm:py-20">
        <div className="hidden sm:flex logo px-12 items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-10" />
          <h3 className="font-bold text-xl tracking-tight leading-5">Spend <br /> Wise</h3>
        </div>
        <div className="flex justify-between flex-row flex-wrap sm:flex-col gap-4 sm:mt-12 mt-4 mb-4 sm:mb-0 text-center px-6">
            <Link to={"/"} className={`cursor-pointer flex flex-col sm:flex-row items-center gap-4 ${location.pathname === "/" ? "bg-blue-300 hover:bg-blue-300" : ""} hover:bg-blue-100 p-3 rounded-lg`}>
                <span className="text-2xl sm:text-md"><IoHomeOutline /></span>
                <p className="text-lg hidden sm:block">Home</p>
            </Link>
            <Link to={"/transactions"}className={`cursor-pointer flex-col sm:flex-row flex items-center hover:bg-blue-100 gap-4 p-3 rounded-lg ${location.pathname === "/transactions" ? "bg-blue-300 hover:bg-blue-300" : ""}`}>
                <span className="text-2xl sm:text-md"><FaRegChartBar /></span>
                <p className="text-lg hidden sm:block">Transactions</p>
            </Link>
            <Link to={"/categories"} className={`cursor-pointer flex-col sm:flex-row flex items-center hover:bg-blue-100 gap-4 p-3 rounded-lg ${location.pathname === "/categories" ? "bg-blue-300 hover:bg-blue-300" : ""}`}>
                <span className="text-2xl sm:text-md"><MdOutlineCategory /></span>
                <p className="text-lg hidden sm:block">Categories</p>
            </Link>
            <Link to={"/settings"} className={` cursor-pointer flex flex-col sm:flex-row items-center hover:bg-blue-100 gap-4 p-3 rounded-lg ${location.pathname === "/settings" ? "bg-blue-300 hover:bg-blue-300" : ""}`}>
                <span className="text-2xl sm:text-md"><IoSettingsOutline /></span>
                <p className="text-lg hidden sm:block">Settings</p>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
