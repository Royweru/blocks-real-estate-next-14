import { Home, LandPlot, SpaceIcon } from "lucide-react";
import React from "react";

const divContent = [
  {
    Icon: Home,
    id: 1,
    description:
      "Be happy",
  },
  {
    Icon: SpaceIcon,
    id: 2,

    description:
      "Get a place",
  },
  {
    Icon: LandPlot,
    id: 3,
    description:
      "Feel comfortable",
  },
];
const ShowCase = () => {
  return (
    <>
      <section className="  bg-slate-400 flex flex-col justify-start w-full py-16 rounded gap-y-4">
        <h1 className=" mt-2 text-red-200 font-bold font-mono text-center text-3xl ">
          Make sure you never miss out on our updates!
        </h1>
        <div className=" flex justify-evenly items-center">
        {divContent.map((box) => (
          <div
            key={box.id}
            className=" flex flex-col justify-center items-center p-3 rounded-md bg-slate-200"
          >
            
            {box.description}
          </div>
        ))}
        </div>
      </section>
    </>
  );
};

export default ShowCase;