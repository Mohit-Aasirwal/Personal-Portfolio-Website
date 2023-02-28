import React from "react";
import Telescope from "../../assets/SVG/telescope";

const Projects = () => {
  return (
    <div className="flex h-screen flex-row bg-secondaryblack">
      <div className=" w-2/3 my-20 flex">
        <h1 className="uppercase font-['Encode Sans SC'] text-5xl my-20 w-full text-center">
          Projects
        </h1>
        <Telescope width={100} height={100} className={`opacity-20 my-20`} />
      </div>
      <div className="specialdiv2 h-screen w-1/3 bg-darkblack"></div>
    </div>
  );
};

export default Projects;
