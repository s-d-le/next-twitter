import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  return (
    <div>
      {/* Logo */}
      <div className="">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
          width={50}
          height={50}
          alt="Logo"
        ></Image>
      </div>

      {/* Menu */}
      <div className="">
        <SidebarMenuItem />
      </div>
      {/* Button */}
      {/* Profile */}
    </div>
  );
}
