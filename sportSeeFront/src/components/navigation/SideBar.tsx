import Copyright from "../Copyright";
import NavItem from "./NavItem";
import cycling from "../../assets/icons/cycling.svg";
import swim from "../../assets/icons/swim.svg";
import yoga from "../../assets/icons/yoga.svg";
import weight from "../../assets/icons/weight.svg";

function Sidebar() {
  return (
    <div className="min-h-full w-32 bg-primary fixed shadow-layout left-0 top-0 -z-10 pt-[15%]">
      <div className="flex flex-col gap-5 justify-center items-center w-full">
        <NavItem icon={yoga} href="#" />
        <NavItem icon={swim} href="#" />
        <NavItem icon={cycling} href="#" />
        <NavItem icon={weight} href="#" />
      </div>
      <Copyright />
    </div>
  );
}

export default Sidebar;
