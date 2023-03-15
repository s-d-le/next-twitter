import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {
  HiOutlineBell,
  HiOutlineBookmark,
  HiOutlineClipboard,
  HiOutlineDotsCircleHorizontal,
  HiOutlineHashtag,
  HiHome,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";

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
        <SidebarMenuItem Icon={HiHome} text="Home" />
        <SidebarMenuItem Icon={HiOutlineHashtag} text="Explore" />
        <SidebarMenuItem Icon={HiOutlineBell} text="Notifications" />
        <SidebarMenuItem Icon={HiOutlineMail} text="Messages" />
        <SidebarMenuItem Icon={HiOutlineBookmark} text="Bookmarks" />
        <SidebarMenuItem Icon={HiOutlineClipboard} text="Lists" />
        <SidebarMenuItem Icon={HiOutlineUser} text="Profile" />
        <SidebarMenuItem Icon={HiOutlineDotsCircleHorizontal} text="More" />
      </div>
      {/* Button */}
      {/* Profile */}
    </div>
  );
}
