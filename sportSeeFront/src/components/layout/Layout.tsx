import Header from "../navigation/Header";
import { Outlet } from "react-router";
import Sidebar from "../navigation/SideBar";

function Layout() {
  return (
    <main className="relative">
      <Header />
      <Sidebar />
      <div className="flex mt-24 ml-32">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
