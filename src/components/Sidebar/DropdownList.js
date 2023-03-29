import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { Link } from "react-router-dom";

const DropdownList = ({ list }) => {
  console.log(list);
  const [subDropdown, setSubDropdown] = useState(false);
  if (list.pages) {
    return (
      <li className="p-1">
        <button
          onClick={() => setSubDropdown(!subDropdown)}
          className="w-full hover:text-primary duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <BsDot className="text-2xl" />
              <h6>{list.title}</h6>
            </div>

            {subDropdown ? (
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

        <nav className={`${subDropdown ? "block" : "hidden"}`}>
          <ul className="text-[15px] text-neutral/80 pl-7">
            {list?.pages?.map((list, index) => (
              <li>
                <Link className="block py-1 hover:text-primary duration-300">
                  {list.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </li>
    );
  } else {
    return (
      <li>
        <Link className="block py-1 hover:text-primary duration-300">
          <div className="flex gap-1 items-center">
            <BsDot className="text-2xl" />
            <h6>{list.title}</h6>
          </div>
        </Link>
      </li>
    );
  }
};

export default DropdownList;
