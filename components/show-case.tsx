import { Home, LandPlot, SpaceIcon } from "lucide-react";
import React from "react";
import Heading from "./ui/heading";

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
      <section className="  bg-slate-400 flex flex-col relative w-full py-10 rounded gap-y-4 ">
        <Heading title=" Reasons why you should definetly patener with us"/>
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
