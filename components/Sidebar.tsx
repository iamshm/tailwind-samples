import FireIcon from "@/assets/icons/fire.svg";
import AddIcon from "@/assets/icons/add.svg";
import PoopIcon from "@/assets/icons/poop.svg";
import ThunderIcon from "@/assets/icons/thunder.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import { FunctionComponent } from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SidebarIcons Icon={FireIcon} text="Fire" />
      <SidebarIcons Icon={AddIcon} text="Add" />
      <SidebarIcons Icon={PoopIcon} text="Poop" />
      <SidebarIcons Icon={ThunderIcon} text="Thunder" />
      <SidebarIcons Icon={HeartIcon} text="Heart" />
    </div>
  );
};

export default Sidebar;

const SidebarIcons = ({
  Icon,
  text,
}: {
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
}) => {
  return (
    <div className="sidebar-icon group">
      <Icon height={24} width={24} />

      <div className="sidebar-tooltip group-hover:scale-100">{text}</div>
    </div>
  );
};
