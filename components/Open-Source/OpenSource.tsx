import React from "react";
import Astronomer from "../../assets/SVG/astronomer";
import Star from "../../assets/SVG/star";

const OpenSource = () => {
  return (
    <div className="flex flex-row bg-secondaryblack">
      <div className="w-1/3 h-screen specialdiv4 bg-darkblack"></div>
      <div className="w-2/3 h-screen flex">
        <Astronomer height={100} width={100} className={`my-10 opacity-40`} />
        <h1 className="uppercase font-['Encode Sans SC'] text-5xl px-56 w-full">
          Open-Source
        </h1>
      </div>
      <Star width={50} height={50} className={`relative top-[40rem]`}/>
    </div>
  );
};

export default OpenSource;
