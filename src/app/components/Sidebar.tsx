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
    <div className="fixed hidden h-full flex-col p-2 sm:flex xl:items-start">
      {/* Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
          width={30}
          height={30}
          alt="Logo"
        ></Image>
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
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
      <div className="hoverEffect mt-auto flex items-center p-2 text-gray-700">
        <Image
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Profile picture"
          width={80}
          height={80}
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">Amanda Swayze</h4>
          <p className="text-gray-500">@AmSwayze</p>
        </div>
        <HiOutlineDotsHorizontal className="hidden h-5 xl:ml-8 xl:inline" />
      </div>
    </div>
  );
}
