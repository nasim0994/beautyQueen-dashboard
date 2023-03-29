import React from "react";
import "./Main.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex px-10 text-neutral bg-gray-50 min-h-screen">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="outlet py-6">
        <Header />
        <div className="min-h-[80vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
