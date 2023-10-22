import React from "react";
import Starcollection from "../../assets/SVG/starcollection";
import Linkedin from "../../assets/SVG/linkedin";
import Image from "next/image";

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
      <div className="specialdiv5 relative bg-darkblack w-full h-screen">
        <div className="mx-10 absolute">
          <p className="leading-loose font-[Fasthand] text-4xl">
            get featured here
          </p>
          <p className="inline-flex font-[Fasthand] text-2xl">
            endorse my work
          </p>
          <Linkedin width={50} height={50} className={`inline-flex mx-3`} />
        </div>
        <Image
          src={
            "https://media3.giphy.com/media/30pjsLvNyaRY0eoE0b/giphy.gif?cid=ecf05e47trh8abyo7q07rc4oxcnvyz32ngsm1yobdc9unz68&ep=v1_gifs_related&rid=giphy.gif&ct=g"
          }
          width={100}
          height={100}
          alt="stars"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Endorsements;
