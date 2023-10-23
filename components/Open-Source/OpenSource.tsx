import React from "react";
import Astronomer from "../../assets/SVG/astronomer";
import Star from "../../assets/SVG/star";
import Image from "next/image";
import Modal from "./Modal";

const data = [
  {
    name: "OrcaSound",
    description:
      "I've done research on whales and done some essential engineering work in orcasound in the year 2023 and 2022. It is one of my first open source contributions and ",
    image:
      "https://media2.giphy.com/media/ihMRYa5ULUGOJsLntS/giphy.gif?cid=ecf05e470t06bq2xsp67szb8le5km1dhluweoqb66isk82ym&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    link: "https://www.orcasound.com",
  },
  {
    name: "",
    description: "",
    image: "",
    link: "",
  },
  {
    name: "",
    description: "",
    image: "",
    link: "",
  },
  {
    name: "",
    description: "",
    image: "",
    link: "",
  },
  {
    name: "",
    description: "",
    image: "",
    link: "",
  },
  {
    name: "",
    description: "",
    image: "",
    link: "",
  },
  {
    name: "",
    description: "",
    image: "",
    link: "",
  },
  {
    name: "",
    description: "",
    image: "",
    link: "",
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
