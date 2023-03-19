import React from "react";
import Telescope from "../../assets/SVG/telescope";

const Projects = () => {
  return (
    <div className="flex h-screen flex-row bg-secondaryblack">
      <div className=" md:w-2/3 md:my-20 flex text-center ">
        <h1 className="uppercase font-['Encode Sans SC'] text-5xl my-20 w-full text-center mx-auto  first-letter:text-6xl">
          Projects
        </h1>
        <Telescope width={100} height={100} className={`opacity-20 my-20`} />
      </div>
      <div className="specialdiv2 hidden md:block h-screen md:w-1/3 md:bg-darkblack"></div>
    </div>
  );
};

export default Projects;
