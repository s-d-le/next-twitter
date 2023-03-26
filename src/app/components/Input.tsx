import Image from "next/image";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineEmojiEmotions } from "react-icons/md";

export default function Input() {
  return (
    <div className="flex space-x-3 border-b border-gray-200 p-3">
      <Image
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        width={30}
        height={30}
        alt="user image"
        className="h-11 w-11 cursor-pointer rounded-full hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            rows={2}
            placeholder="What's happening"
            className="min-h-[50px] w-full border-none text-lg tracking-wide text-gray-700 placeholder-gray-700 focus:ring-0"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <HiOutlinePhotograph className="hoverEffect h-10 w-10 p-2 text-sky-500 hover:bg-sky-100"></HiOutlinePhotograph>
            <MdOutlineEmojiEmotions className="hoverEffect h-10 w-10 p-2 text-sky-500 hover:bg-sky-100"></MdOutlineEmojiEmotions>
          </div>
          <button
            className="rounded-full bg-blue-400 px-4 py-1.5 font-bold text-white shadow-md hover:brightness-95 disabled:opacity-50"
            disabled
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
