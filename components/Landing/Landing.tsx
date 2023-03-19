import Link from "next/link";
import Image from "next/image";
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
      <div
        id="Home"
        className="md:flex md:flex-row md:h-screen flex flex-col bg-secondaryblack"
      >
        <div className="md:w-2/3 specialdiv bg-darkblack">
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
        <div className="md:w-1/3 flex flex-col md:mt-20 text-center md:text-left">
          <StarCollection
            width={50}
            height={50}
            className={`relative top-96 left-80 md:absolute md:top-[35rem] md:left-[45rem]`}
          />
          {/* <FrontSVG height={100} width={866} /> */}
          <Star height={50} width={50} className={`mx-72`} />
          <h1 className="font-['Itim']  font-light text-7xl">Hola!</h1>
          <h1 className="font-['Itim'] font-light text-7xl mb-14">Soy Mohit</h1>
          <div className="flex flex-col">
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
    </>
  );
};

export default Landing;
