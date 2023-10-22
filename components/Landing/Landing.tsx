import Link from "next/link";
import Image from "next/image";
import FrontSVG from "../../assets/SVG/frontsvg";
import Star from "../../assets/SVG/star";
import StarCollection from "../../assets/SVG/starcollection";
import Github from "../../assets/SVG/github";
import LinkedIn from "../../assets/SVG/linkedin";
import Twitter from "../../assets/SVG/twitter";
import Setup from "../../assets/microinteractions/sphere";
// import Script from "next/script";
import { gsap } from "gsap";
import { useEffect } from "react";
import Sphere from "../../assets/models/Sphere";

const Landing = () => {
  useEffect(() => {
    // Initialize GSAP here
    // Example animation using GSAP
    gsap.fromTo(
      ".home",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, duration: 1, delay: 1, stagger: 0.5, scale: 1 }
    );
    // gsap.to(".home", { opacity: 1 });
  }, []);

  return (
    <>
      <div
        id="Home"
        className="md:flex md:flex-row md:h-screen flex flex-col bg-secondaryblack home"
      >
        <div className="md:w-2/3 flex items-end specialdiv bg-darkblack">
          {/* <Setup/> */}
          {/* <Sphere /> */}
          <Image
            priority
            src={
              "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWh1MG9lYTQ4Mjc4azZ1aGZ3cGV6eHFtaHdlcm82ZGFzYTI1eWo4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ffn7MSNzpV3L02IYsB/giphy.gif"
            }
            alt="earth"
            width={400}
            height={400}
            className="w-full h-fit"
          />
          <Image
            priority
            src={"/profile.png"}
            alt="profile"
            width={450}
            height={450}
            className={`z-auto xl:w-1/2 absolute`}
            // loading="lazy"
          />
        </div>
        <div className="md:w-1/3 flex flex-col md:mt-20 xl:my-auto lg:mt-32 text-center md:text-left">
          <StarCollection
            width={50}
            height={50}
            className={`relative top-96 -right-3 md:absolute md:right-56 md:top-3/4 xl:left-[52rem] lg:left-[35rem] md:left-[27rem]`}
          />
          {/* <FrontSVG height={100} width={866} /> */}
          <Star
            height={50}
            width={50}
            className={`mx-72 md:relative md:top-10 md:left-40 md:mx-0 z-10`}
          />
          <h1 className="font-['Itim']  font-light text-6xl">Hola!</h1>
          <h1 className="font-['Itim'] font-light text-6xl mb-14">Soy Mohit</h1>
          <div className="flex flex-col justify-center">
            <p className="leading-loose font-normal text-greyish font-['Inder'] text-xl">
              - Cosmology Stan
            </p>
            <p className="leading-loose font-normal text-greyish font-['Inder'] text-xl">
              - Full Stack Developer
            </p>
            <p className="leading-loose font-normal text-greyish font-['Inder'] text-xl">
              - Rational Thinker
            </p>
          </div>
          <div className="flex flex-row my-20 justify-start items-center mx-auto sm:mx-0">
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
      {/* <Script src="../../assets/microinteractions/LandingAnimation.js" defer /> */}
    </>
  );
};

export default Landing;
