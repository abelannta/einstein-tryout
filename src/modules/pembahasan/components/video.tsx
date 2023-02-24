import { BsPlayFill } from "react-icons/bs";

export const VideoPembahasan = () => {
  return (
    <div className="bg-black aspect-video w-full rounded-md mt-10 relative cursor-pointer">
      <div className="absolute text-bold h-full w-full flex justify-center items-center">
        <BsPlayFill className="w-40 h-40" />
      </div>
    </div>
  );
};
