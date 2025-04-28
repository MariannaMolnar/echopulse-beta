import Navbar from "./Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="bg-background-1 bg-fixed min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-1 relative overflow-hidden z-0">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
