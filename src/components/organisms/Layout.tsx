import Navbar from "./Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="bg-background-1 bg-fixed min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-1 pt-[2rem] relative overflow-hidden z-0">
        {/*<div className="fixed top-0 left-0 w-full h-20 fade-out z-30"></div>*/}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
