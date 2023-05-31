import { GetServerSideProps } from "next";
import React from "react";
import GitHub from "../../assets/SVG/github";
const links = [
  { name: "Home", link: "#Home" },
  { name: "About", link: "#About" },
  { name: "Skills", link: "#Skills" },
  { name: "Experience", link: "#Experience" },
  { name: "Resume", link: "#Resume" },
];

const Navbar = () => {
  return (
    <nav className=" z-50 hidden sm:flex fixed my-10 w-full shadow-inner h-16">
      {/* <GitHub/> */}
      <ul className="bg-primary w-fit xl:px-20 mx-auto flex flex-row rounded-xl justify-center py-6 items-center">
        {links.map((link, index) => (
          <li
            className="text-white text-xl font-normal tracking-wide mx-10 hover:text-black delay-75"
            key={index}
          >
            <a href={link.link} className='font-["Itim"]'>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
