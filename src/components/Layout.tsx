import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

//type Props = {};

function Layout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
