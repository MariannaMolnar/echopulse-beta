import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

//type Props = {};

function Layout() {
  return (
    <div className="bg-background-1 bg-fixed h-full w-full">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
