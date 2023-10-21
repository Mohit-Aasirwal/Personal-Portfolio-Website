import React from "react";
import Astronomer from "../../assets/SVG/astronomer";
import Star from "../../assets/SVG/star";
import Image from "next/image";

const OpenSource = () => {
  return (
    <div className="flex flex-row bg-secondaryblack">
      <div className="md:w-1/3 h-screen hidden md:block specialdiv4 md:bg-darkblack object-cover ">
        <Image
          src={
            "https://media2.giphy.com/media/3gJRDvjz1vc666fxPl/giphy.gif?cid=ecf05e47vyoxp28dp3wvkix3sv89pn79rux2vfmnb2vuyphh&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          }
          width={100}
          height={100}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="md:w-2/3 h-screen flex">
        <Astronomer
          height={100}
          width={100}
          className={`my-10 lg:-ml-10 opacity-40 md:relative md:ml-10 z-50`}
        />
        <h1 className="uppercase text-white font-['Encode Sans SC'] text-5xl md:px-56 w-full text-center first-letter:text-6xl">
          Open-Source
        </h1>
      </div>
      <Star width={50} height={50} className={`relative top-[30rem]`} />
    </div>
  );
};

export default OpenSource;
