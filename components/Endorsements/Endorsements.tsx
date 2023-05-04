import React from "react";
import Starcollection from "../../assets/SVG/starcollection";
import Linkedin from "../../assets/SVG/linkedin";

const Endorsements = () => {
  return (
    <div className="h-fit flex flex-col bg-secondaryblack">
      <div className="text-center">
        <h1 className="uppercase font-[Encode Sans SC] text-5xl text-white w-full text-center first-letter:text-6xl">
          Endorsements
        </h1>
        <Starcollection
          width={50}
          height={50}
          className={`w-full my-20 opacity-70`}
        />
      </div>
      <div className="specialdiv5 bg-darkblack w-full h-screen">
        <div className="mx-10 relative">
          <p className="leading-loose font-[Fasthand] text-4xl">
            get featured here
          </p>
          <p className="inline-flex font-[Fasthand] text-2xl">endorse me</p>
          <Linkedin width={50} height={50} className={`inline-flex mx-3`} />
        </div>
      </div>
    </div>
  );
};

export default Endorsements;
