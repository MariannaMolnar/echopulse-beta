import Navbar from "./Navbar";
import { Outlet } from "react-router";

//type Props = {};

function Layout() {
  return (
    <div className="bg-background-1 bg-fixed min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-1 pt-[4rem]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
