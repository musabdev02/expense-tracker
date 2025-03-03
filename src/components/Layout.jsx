import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Layout = () => {
  
  return (
    <section>
    <div className="flex flex-col-reverse h-screen sm:flex-row ">
      <Sidebar />
      <div className="flex-1  bg-[white] h-full p-6 sm:p-16">
       <Outlet />
      </div>
    </div>
    </section>
  );
};

export default Layout;
