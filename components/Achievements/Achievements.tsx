import React from "react";
import Satellite from "../../assets/SVG/satellite";
import Image from "next/image";
import Slice from "./Slice";

const data = [
  {
    description:
      "Selected as top 100 fellows under prestigious XROS fellowship organized by Meta, NeGD, Government of India among 10,000 applicants.",
  },
  {
    description:
      "Participated in 15+ Hackathons Globally including in-person hackathons at IIT-Bombay, NIT Surat etc.",
  },
  {
    description:
      "Successfully led a Tech-fest in my college. i.e. Invento IET-DAVV with conducting all major activities at a 1000+ footfall.",
  },
  {
    description:
      "Developed 2 major software for university, DAVV Admin and IETians Diary with 1000+ userbase.",
  },
  {
    description:
      "Founded a SaaS agency named Ledgerchirp, which works in providing services in web development, application development and blockchain.",
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
