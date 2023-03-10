import Link from "next/link";
import React from "react";
import Github from "../../assets/SVG/github";
import Linkedin from "../../assets/SVG/linkedin";
import Twitter from "../../assets/SVG/twitter";

const Footer = () => {
  return (
    <div className="flex bg-darkblack mt-10 flex-col w-full h-fit">
      <div className="items-center justify-center flex flex-row">
        <Link
          href="https://www.github.com/Mohit-Aasirwal"
          className="mx-10"
          target={"_blank"}
        >
          <Github height={50} width={50} className={``} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohit-aasirwal-478466223"
          target={"_blank"}
          className="mx-10"
        >
          <Linkedin height={50} width={50} className={``} />
        </Link>
        <Link
          href="https://www.twitter.com/AasirwalMohit"
          target={"_blank"}
          className="mx-10"
        >
          <Twitter height={50} width={50} className={``} />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <p className="font-[Encode Sans SC] uppercase first-letter:font-bold text-lg">
          Made with Love and Code
        </p>
        <p className="font-[Encode Sans SC] uppercase first-letter:font-bold text-lg">
          by nextjs, typescript, tailwindcss and strapicms
        </p>
        <p className="font-[Encode Sans SC] uppercase text-xs mt-3">
          &copy; Mohit Aasirwal 2023 - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
