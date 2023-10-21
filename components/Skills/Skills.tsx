import React from "react";
import Saturn from "../../assets/SVG/saturn";
import Image from "next/image";
import Reactsvg from "../../assets/SVG/react";
import Javascript from "../../assets/SVG/javascript";
import Typescript from "../../assets/SVG/typescript";
import Next from "../../assets/SVG/next";
import Tailwind from "../../assets/SVG/tailwind";
import Node from "../../assets/SVG/node";
import Python from "../../assets/SVG/python";
import Java from "../../assets/SVG/java";
import Docker from "../../assets/SVG/docker";
import Solidity from "../../assets/SVG/solidity";
import Linux from "../../assets/SVG/linux";
import Youtube from "../../assets/SVG/youtube";
import Premiere from "../../assets/SVG/premiere";
import Illustrator from "../../assets/SVG/illustrator";
import AfterEffects from "../../assets/SVG/aftereffect";
import Figma from "../../assets/SVG/figma";
import Sketch from "../../assets/SVG/sketch";
import SASS from "../../assets/SVG/sass";
import ScrollTrigger from "../../assets/SVG/scrolltrigger";
import Jira from "../../assets/SVG/jira";
import Git from "../../assets/SVG/git";
import Bootstrap from "../../assets/SVG/bootstrap";
import Framer from "../../assets/SVG/framer";
import Three from "../../assets/SVG/three";
import DevOps from "../../assets/SVG/devops";
import Nginx from "../../assets/SVG/nginx";
import Jquery from "../../assets/SVG/jquery";

const Skills = () => {
  return (
    <div id="Skills" className="md:h-screen bg-secondaryblack">
      <Saturn
        width={100}
        height={100}
        className={`opacity-20 md:w-20 md:h-20 md:ml-10 w-16 h-16 inline-flex`}
      />
      <h1 className="text-5xl first-letter:text-6xl uppercase ml-10 text-center md:mx-0 inline-flex w-4/5 items-center tracking-wide justify-center font-['Encode Sans SC'] my-10 md:my-0">
        Acquired Skills
      </h1>
      <div className="specialdiv3 skills bg-darkblack space-y-10 md:p-40 p-6 md:w-screen md:h-screen h-fit">
        <div className="md:flex md:justify-between md:items-center grid grid-cols-4 gap-10">
          <Reactsvg />
          <Javascript />
          <Python />
          <Node />
          <Java />
          <Docker />
          <Solidity />
          <Linux />
        </div>
        <div className="md:flex md:justify-between md:items-center grid grid-cols-4 gap-10">
          <Next />
          <Youtube />
          <Premiere />
          <Illustrator />
          <AfterEffects />
          <Figma />
          <Sketch />
          <SASS />
        </div>
        <div className="md:flex md:justify-between md:items-center grid grid-cols-4 gap-10">
          <Three />
          {/* <ScrollTrigger /> */}
          {/* <Jira /> */}
          <Git />
          <Bootstrap />
          <Framer />
          <Tailwind />
          <Typescript />
          <DevOps />
        </div>
        <div className="md:flex md:justify-evenly md:items-center grid grid-cols-4 gap-10">
          <Nginx />
          <Jquery />
        </div>
        <h4 className="text-white md:text-2xl">
          and learning something new everyday...
        </h4>
      </div>
    </div>
  );
};

export default Skills;
