import React from "react";
import Astronomer from "../../assets/SVG/astronomer";
import Star from "../../assets/SVG/star";

const OpenSource = () => {
  return (
    <div className="flex flex-row bg-secondaryblack">
      <div className="md:w-1/3 h-screen hidden md:block specialdiv4 md:bg-darkblack"></div>
      <div className="md:w-2/3 h-screen flex">
        <Astronomer height={100} width={100} className={`my-10 opacity-40`} />
        <h1 className="uppercase font-['Encode Sans SC'] text-5xl md:px-56 w-full text-center first-letter:text-6xl">
          Open-Source
        </h1>
      </div>
      <Star width={50} height={50} className={`relative top-[30rem]`} />
    </div>
  );
};

export default OpenSource;
