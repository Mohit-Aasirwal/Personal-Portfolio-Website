import { GetServerSideProps } from "next";
import React from "react";
import GitHub from "../../assets/SVG/github";
const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/" },
  { name: "Skills", link: "/" },
  { name: "Experience", link: "/" },
  { name: "Contact", link: "/" },
];

const Navbar = () => {
  return (
    <nav className=" z-50 fixed my-10 w-full shadow-inner h-20">
      {/* <GitHub/> */}
      <ul className="bg-primary w-3/4 mx-auto flex flex-row rounded-xl justify-center py-6 items-center">
        {links.map((link, index) => (
          <li
            className="text-white text-2xl font-normal tracking-wide mx-16 hover:text-black delay-75"
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
