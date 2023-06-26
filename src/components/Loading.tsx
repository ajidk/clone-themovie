import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-5 justify-center items-center text-red-400  bg-gradient-to-br from-pink-400 to-red-600">
      <AiOutlineLoading3Quarters className="animate-spin delay-75 duration-75  text-5xl font-extrabold bg-clip-text" />
      <span className="text-xl">Loading</span>
    </div>
  );
};

export default Loading;
