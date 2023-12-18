import Header from "../Header";
import { Outlet } from "react-router";
import Sidebar from "../SideBar";

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
