import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import DropdownList from "./DropdownList";

const SidebarList = ({ list }) => {
  const [dropdown, setDropdown] = useState(false);
  if (list.pages) {
    return (
      <li>
        <button
          onClick={() => setDropdown(!dropdown)}
          className="w-full flex gap-2 items-center p-3 rounded-lg"
        >
          <span className="text-sm bg-gradient text-base-100 p-2 rounded-md">
            {/* <RxDashboard /> */}
            {list.icon}
          </span>
          <div className="w-full flex items-center justify-between">
            <span className="font-medium text-title text-[15px]">
              {list.title}
            </span>

            {dropdown ? (
              <span>
                <MdOutlineKeyboardArrowUp />
              </span>
            ) : (
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            )}
          </div>
        </button>

        <nav className={`${dropdown ? "block" : "hidden"}`}>
          <ul className="p-2 pt-0 pl-5">
            {list.pages.map((list, index) => (
              <DropdownList key={index} list={list} />
            ))}
          </ul>
        </nav>
      </li>
    );
  } else {
    <li className="p-1 hover:text-primary duration-300">
      <Link className="block hover:text-primary duration-300">
        {list.title}
      </Link>
    </li>;
  }
};

export default SidebarList;
