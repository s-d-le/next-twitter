import { HiOutlineSparkles } from "react-icons/hi";
import Input from "./Input";
import Post, { IPost } from "./Post";

export default function Feed() {
  const posts: IPost[] = [
    {
      id: 1,
      name: "John Doe",
      userName: "ayzkeys",
      userImg:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      postImg:
        "https://images.unsplash.com/photo-1506359284730-addb49f16b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      postText: "Wow!",
      timeStamp: "2 hours ago",
    },
    {
      id: 2,
      name: "John Doe",
      userName: "ayzkeys",
      userImg:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      postImg:
        "https://images.unsplash.com/photo-1679345506099-baca3b043efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
      postText: "Nice view",
      timeStamp: "2 days ago",
    },
  ];

  return (
    <div className="max-w-xl flex-grow border-l border-r border-gray-200 sm:ml-[73px] xl:ml-[370px] xl:min-w-[576px]">
      <div className="sticky top-0 z-50 flex border-b border-gray-200 bg-white py-2 px-3">
        <h2 className="cursor-pointer text-lg font-bold sm:text-xl">Home</h2>
        <div className="hoverEffect ml-auto flex h-9 w-9 items-center justify-center px-0">
          <HiOutlineSparkles className="h-5" />
        </div>
      </div>
      <Input></Input>
      {posts.map((post) => (
        <Post key={post.id} {...post}></Post>
      ))}
    </div>
  );
}
