import { HiOutlineSparkles } from "react-icons/hi";
import Input from "./Input";

export default function Feed() {
  return (
    <div className="max-w-xl flex-grow border-l border-r border-gray-200 sm:ml-[73px] xl:ml-[370px] xl:min-w-[576px]">
      <div className="sticky top-0 z-50 flex border-b border-gray-200 bg-white py-2 px-3">
        <h2 className="cursor-pointer text-lg font-bold sm:text-xl">Home</h2>
        <div className="hoverEffect ml-auto flex h-9 w-9 items-center justify-center px-0">
          <HiOutlineSparkles className="h-5" />
        </div>
      </div>
      <Input></Input>
    </div>
  );
}
