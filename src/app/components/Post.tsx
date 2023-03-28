import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  BsChatDots,
  BsTrash,
  BsHeart,
  BsShare,
  BsBarChart,
} from "react-icons/bs";

export interface IPost {
  id: number;
  name: string;
  userName: string;
  userImg: string;
  postImg: string;
  postText: string;
  timeStamp: string;
}

export default function Post({ ...post }: IPost) {
  return (
    <div className="flex cursor-pointer border-b border-gray-200 p-3">
      <Image
        src={post.userImg}
        width={40}
        height={40}
        className="mr-4 h-11 w-11 rounded-full"
        alt="user image"
      />
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="text-[15px] font-bold hover:underline sm:text-[16px]">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.userName} - </span>
            <span className="text-sm hover:underline sm:text-[15px]">
              {post.timeStamp}
            </span>
          </div>
          <BiDotsHorizontalRounded className="hoverEffect hover:text-color-sky-500 h-10 w-10 p-2 hover:bg-sky-100"></BiDotsHorizontalRounded>
        </div>

        <p className="mb-2 text-[15px] text-gray-800 sm:text-[16px]">
          {post.postText}
        </p>

        <Image
          src={post.postImg}
          alt="post image"
          height={200}
          width={400}
          className="mr-2 rounded-2xl"
        ></Image>

        <div className="flex justify-between p-2 text-gray-500">
          <BsChatDots className="hoverEffect h-9 p-2 hover:bg-sky-200 hover:text-sky-500"></BsChatDots>
          <BsTrash className="hoverEffect h-9 p-2 hover:bg-red-100 hover:text-red-600"></BsTrash>
          <BsHeart className="hoverEffect h-9 p-2 hover:bg-red-100 hover:text-red-600"></BsHeart>
          <BsShare className="hoverEffect h-9 p-2 hover:bg-sky-200 hover:text-sky-500"></BsShare>
          <BsBarChart className="hoverEffect h-9 p-2 hover:bg-sky-200 hover:text-sky-500"></BsBarChart>
        </div>
      </div>
    </div>
  );
}
