import React from "react";
import Telescope from "../../assets/SVG/telescope";
import Image from "next/image";
import Modal from "./Modal";

const data = [
  {
    name: "Portfolio Website",
    image:
      "https://media0.giphy.com/media/KtiaZUcRgPuKF7TnNt/giphy.gif?cid=ecf05e47ed6t4kgn99bj7de2wj4nv87t1fruk5iztsvqit1h&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
    link: "https://techie.design",
    description:
      "My portfolio website that contains my skills and what I'm passionate about lorem ipsum dolor sit amet lorem akd kdjf dkjfs dkjdi kdifhe kdgua ,egioa w engiehaye mifaye  dhfuahe goeiah efieh My portfolio website that contains my skills and what I'm passionate about lorem ipsum dolor sit amet lorem akd kdjf dkjfs dkjdi kdifhe kdgua ,egioa w engiehaye mifaye dhfuahe goeiah efiehMy portfolio website that contains my skills and what I'm passionate about lorem ipsum dolor sit amet lorem akd that contains my skills and what I'm passionate about lorem ipsum dolor sit amet lorem akd kdjf dkjfs dkjdi kdifhe kdgua ,egioa w engiehaye mifaye dhfuahe goeiah efiehMy portfolio website that contains my skills and what I'm passionate about lorem ipsum dolor sit amet lorem akd ",
  },
  {
    name: "",
    image: "",
    link: "",
    description: "",
  },
  {
    name: "",
    image: "",
    link: "",
    description: "",
  },
  {
    name: "",
    image: "",
    link: "",
    description: "",
  },
  {
    name: "",
    image: "",
    link: "",
    description: "",
  },
  {
    name: "",
    image: "",
    link: "",
    description: "",
  },
  {
    name: "",
    image: "",
    link: "",
    description: "",
  },
];

const Projects = () => {
  return (
    <div id="Experience">
      <div className="flex h-fit flex-row bg-secondaryblack">
        <div className=" md:w-2/3 md:my-20 flex text-center flex-col ">
          <div className="flex">
            <h1 className="uppercase font-['Encode Sans SC'] text-5xl my-20 w-full text-center mx-auto  first-letter:text-6xl">
              Projects
            </h1>
            <Telescope
              width={100}
              height={100}
              className={`opacity-20 my-20`}
            />
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-20 mx-10">
            {data &&
              data.map((value, id) => {
                return (
                  <Modal
                    key={id}
                    name={value.name}
                    description={value.description}
                    image={value.image}
                    link={value.link}
                  />
                );
              })}
          </div>
        </div>
        <div className="specialdiv2 hidden md:block h-screen md:w-1/3 md:bg-darkblack">
          <Image
            src={
              "https://media0.giphy.com/media/9D58IXlnmyl1zPYZHy/giphy.gif?cid=ecf05e47sy2llaf5mbh02twngm3a7ftejm209lbtasqwcdmn&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            }
            width={1000}
            height={1000}
            alt="nebula"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
