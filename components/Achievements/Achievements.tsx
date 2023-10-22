import React from "react";
import Satellite from "../../assets/SVG/satellite";
import Image from "next/image";

const Achievements = () => {
  return (
    <div className="h-screen flex bg-secondaryblack">
      <div className="md:w-2/3 my-10 flex">
        <Satellite
          width={50}
          height={50}
          className={`md:mx-10 opacity-70 w-12 h-12 md:w-28 md:h-28 `}
        />
        <h1 className="uppercase font-[Encode Sans SC] text-white text-4xl mx-5 md:mx-0 md:text-5xl w-full text-center first-letter:text-6xl">
          Achievements
        </h1>
      </div>
      <div className="specialdiv2 md:w-1/3 bg-darkblack">
        <Image
          src={
            "https://media2.giphy.com/media/xUPGcfzaX9hFFQJYre/giphy.gif?cid=ecf05e478e3ayq07b154l74yolldobfci32odttarntnjm9u&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          }
          width={100}
          height={100}
          alt="astronomer"
          className="w-full h-full hidden md:block"
        />
      </div>
    </div>
  );
};

export default Achievements;
