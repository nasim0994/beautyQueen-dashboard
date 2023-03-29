import React from "react";
import "./Sidebar.css";
import logo from "../../Images/logo.png";
import sidebarLists from "../../Data/SidebarLists";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <div className="h-full Sidebar">
      <div className="py-6">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="" className="w-28" />
          <h1 className="mt-1 font-medium">Dashboard</h1>
        </div>

        <div className="w-full h-[.5px] bg-gradient-to-l from-base-100 via-gray-300 to-base-100 my-4"></div>

        {/* Pages */}
        <div className="px-4">
          <ul>
            {sidebarLists.map((list, index) => (
              <SidebarList key={index} list={list} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
