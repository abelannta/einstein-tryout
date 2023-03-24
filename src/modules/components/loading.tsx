import { AiOutlineLoading } from "react-icons/ai";

export const Loading = () => {
  return (
    <div className="text-black flex items-center justify-center">
      <AiOutlineLoading className="w-10 h-10 animate-spin mr-3" />
      <AiOutlineLoading className="w-10 h-10 animate-spin mr-3" />
      <AiOutlineLoading className="w-10 h-10 animate-spin mr-3" />
    </div>
  );
};
