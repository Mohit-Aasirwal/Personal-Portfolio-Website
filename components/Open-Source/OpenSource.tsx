import React from "react";
import Astronomer from "../../assets/SVG/astronomer";
import Star from "../../assets/SVG/star";
import Image from "next/image";
import Modal from "./Modal";

const data = [
  {
    name: "OrcaSound",
    description:
      "I've done research on whales and done some essential engineering work in orcasound in the year 2023 and 2022. It is one of my first open source contributions. I'm active in the organization till now and contributing to it.",
    image: "https://avatars.githubusercontent.com/u/29990731?s=200&v=4",
    link: "https://www.orcasound.com",
  },
  {
    name: "OpenAstronomy",
    description:
      "I've contributed to GNUastro and Radis in OpenAstronomy. My contributions include research and project discussions on the GNUastro's cli tool and in Radis I've contributed to their plotting portal in terms of frontend enhancements and improvements. I've also applied for GSoC 2k23 under Radis but eventually the project was not got selected.",
    image: "/openastronomy.png",
    link: "https://www.openastonomy.org",
  },
  {
    name: "Alby",
    description:
      "Alby is a lightning wallet for bitcoin. I've contributed in their website for UI fixes and improvements. Unfortunately, the website was scraped off and made from the beginning but my contributions were accepted at that time.",
    image: "https://avatars.githubusercontent.com/u/90630635?s=200&v=4",
    link: "https://getalby.com",
  },
  {
    name: "Motion Design",
    description:
      "I worked as a Frontend Developer in Motion Design and Play during my XROS fellowship. It was an open source project that focuses on running metaverse. The metaverse was developed with BabylonJS, NextJS and TailwindCSS.",
    image: "/mdp.png",
    link: "https://motiondesignandplay.com",
  },
  {
    name: "LinkFree",
    description:
      "LinkFree is a project that is availing users to make their own link portfolio but it is open source and doesn't charge any money from users for making their link portfolio in different themes. I've contributed a new theme named space theme in the repository.",
    image: "/linkfree.png",
    link: "https://github.com/MichaelBarney/LinkFree/tree/master/Templates/Space%20Theme",
  },
];

const OpenSource = () => {
  return (
    <div className="flex flex-row py-20 md:py-0 bg-secondaryblack">
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
      <Astronomer
        height={100}
        width={100}
        className={`my-10 lg:-ml-10 opacity-40 md:relative md:ml-10 z-50`}
      />
      <div className="md:w-2/3 h-fit flex flex-col">
        <h1 className="uppercase text-white font-['Encode Sans SC'] text-5xl md:px-56 w-full text-center first-letter:text-6xl">
          Open-Source
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 mr-10 px-0 md:gap-28 gap-20 mt-10 md:my-20">
          {data &&
            data.map((data, index) => {
              return (
                <Modal
                  name={data.name}
                  description={data.description}
                  image={data.image}
                  link={data.link}
                  key={index}
                />
              );
            })}
        </div>
      </div>
      <Star width={50} height={50} className={`relative top-[30rem]`} />
    </div>
  );
};

export default OpenSource;
