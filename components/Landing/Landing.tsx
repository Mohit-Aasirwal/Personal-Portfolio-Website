import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import FrontSVG from "../../assets/SVG/frontsvg";
import Star from "../../assets/SVG/star";
import StarCollection from "../../assets/SVG/starcollection";
import Github from "../../assets/SVG/github";
import LinkedIn from "../../assets/SVG/linkedin";
import Twitter from "../../assets/SVG/twitter";
import Setup from "../../assets/microinteractions/sphere";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div id="Home" className="flex flex-row h-screen bg-secondaryblack  ">
        <div className="w-2/3 specialdiv bg-darkblack">
          {/* <Setup/> */}
          <Image
            src={"/profile.png"}
            alt="profile"
            width={550}
            height={550}
            className={`z-auto`}
            loading="lazy"
          />
        </div>
        <div className="w-1/3 ">
          <StarCollection
            width={50}
            height={50}
            className={`absolute bottom-32 right-[35rem]`}
          />
          {/* <FrontSVG height={100} width={866} /> */}
          <Star height={50} width={50} className={`mt-36 ml-72`} />
          <h1 className="font-['Itim'] font-light text-7xl">Hola!</h1>
          <h1 className="font-['Itim'] font-light text-7xl mb-14">Soy Mohit</h1>
          <p className="leading-loose font-normal text-greyish font-['Inder'] text-xl">
            - Cosmology Stan
          </p>
          <p className="leading-loose font-normal text-greyish font-['Inder'] text-xl">
            - Full Stack Developer
          </p>
          <p className="leading-loose font-normal text-greyish font-['Inder'] text-xl">
            - Rational Thinker
          </p>
          <div className="flex flex-row my-20 justify-start items-center">
            <Link href="https://www.github.com/Mohit-Aasirwal" target="_blank">
              <Github
                width={50}
                height={50}
                className={`mr-5 hover:-translate-y-2 cursor-pointer`}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohit-aasirwal-478466223"
              target="_blank"
            >
              <LinkedIn
                width={50}
                height={50}
                className={`mx-5 hover:-translate-y-2 cursor-pointer`}
              />
            </Link>
            <Link href="https://www.twitter.com/AasirwalMohit" target="_blank">
              <Twitter
                width={50}
                height={50}
                className={`mx-5 hover:-translate-y-2 cursor-pointer`}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
