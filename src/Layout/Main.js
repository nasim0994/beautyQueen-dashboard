import React, { useState } from "react";
import "./Main.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex lg:gap-6 lg:px-10 text-neutral bg-gray-50 ">
      <div className="my-4 rounded-md">
        {/* Sidebar bg / close sidebar btn */}
        <div
          onClick={() => setSidebarToggle(false)}
          className={`${
            !sidebarToggle && "hidden"
          } fixed top-0 left-0 h-screen w-full bg-[#00000066]`}
        ></div>

        {/* Sidebar */}
        <div className={`sidebar z-50 ${sidebarToggle && "sidebar-show"}`}>
          <Sidebar setSidebarToggle={setSidebarToggle} />
        </div>
      </div>

      {/* Main Content */}
      <div className="outlet lg:py-4">
        <Header setSidebarToggle={setSidebarToggle} />
        <div className="min-h-[85vh] py-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
