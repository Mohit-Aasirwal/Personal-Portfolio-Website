import React from "react";
import Satellite from "../../assets/SVG/satellite";
import Image from "next/image";
import Slice from "./Slice";

const data = [
  {
    description:
      "Received MMVY for consequently four years of study in IET-DAVV",
  },
  {
    description:
      "Received MMVY for consequently four years of study in IET-DAVV",
  },
  {
    description:
      "Received MMVY for consequently four years of study in IET-DAVV",
  },
  {
    description:
      "Received MMVY for consequently four years of study in IET-DAVV",
  },
  {
    description:
      "Received MMVY for consequently four years of study in IET-DAVV",
  },
];

const Achievements = () => {
  return (
    <div className="md:h-screen flex bg-secondaryblack">
      <Satellite
        width={50}
        height={50}
        className={`md:mx-10 opacity-70 w-20 h-20 md:w-28 md:h-28`}
      />
      <div className="md:w-2/3 my-10 flex flex-col space-y-10">
        <h1 className="uppercase font-[Encode Sans SC] text-white text-4xl mx-5 md:mx-0 md:text-5xl w-full text-center first-letter:text-6xl">
          Achievements
        </h1>
        {data &&
          data.map((value, index) => {
            return <Slice description={value.description} key={index} />;
          })}
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
