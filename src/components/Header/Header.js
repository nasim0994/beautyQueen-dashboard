import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-1.5 rounded-md">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>Dashboards</li>
            <li>Dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
