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
  HiOutlineDotsHorizontal,
} from "react-icons/hi";

export default function Sidebar() {
  return (
    <div>
      {/* Logo */}
      <div className="hoverEffect">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
          width={50}
          height={50}
          alt="Logo"
        ></Image>
      </div>

      {/* Menu */}
      <div className="">
        <SidebarMenuItem Icon={HiHome} text="Home" active />
        <SidebarMenuItem Icon={HiOutlineHashtag} text="Explore" />
        <SidebarMenuItem Icon={HiOutlineBell} text="Notifications" />
        <SidebarMenuItem Icon={HiOutlineMail} text="Messages" />
        <SidebarMenuItem Icon={HiOutlineBookmark} text="Bookmarks" />
        <SidebarMenuItem Icon={HiOutlineClipboard} text="Lists" />
        <SidebarMenuItem Icon={HiOutlineUser} text="Profile" />
        <SidebarMenuItem Icon={HiOutlineDotsCircleHorizontal} text="More" />
      </div>

      {/* Button */}
      <button className="hidden h-12 w-56 rounded-full bg-blue-400 text-lg font-bold text-white shadow-md hover:brightness-95 xl:inline">
        Tweet
      </button>

      {/* Profile */}
      <div className="hoverEffect flex items-center justify-center text-gray-700">
        <Image
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Profile picture"
          width={80}
          height={80}
        />
        <div className="">
          <h4>Amanda Swayze</h4>
          <p>@AmSwayze</p>
          <HiOutlineDotsHorizontal className="h-5" />
        </div>
      </div>
    </div>
  );
}
