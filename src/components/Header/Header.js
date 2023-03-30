import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = ({ setSidebarToggle }) => {
  return (
    <div className="sticky top-0 z-40 shadow-lg rounded-md bg-[#ffffffcc] backdrop-blur-[30px] backdrop-saturate-[200%]">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-sm breadcrumbs flex items-center gap-4">
          <button
            onClick={() => setSidebarToggle(true)}
            className="text-lg lg:hidden"
          >
            <RiMenu2Line />
          </button>
          <ul>
            <li>Dashboards</li>
            <li>Dashboard</li>
          </ul>
        </div>

        <nav>
          <ul>
            <li>
              <Link>SignIn</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
