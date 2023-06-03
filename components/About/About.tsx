import Link from "next/link";
import StarMoon from "../../assets/SVG/moonwithstar";
import Moon from "../../assets/SVG/moon";
import Star from "../../assets/SVG/star";
import Starcollection from "../../assets/SVG/starcollection";
const About = () => {
  return (
    <div
      id="About"
      className="flex h-fit md:h-screen flex-row bg-secondaryblack"
    >
      <div className="md:w-2/3 my-20 flex flex-col lg:my-auto lg:space-y-5 xl:space-y-10 ">
        <div className="md:flex md:justify-center md:items-center md:mb-16">
          <StarMoon
            width={40}
            height={40}
            className={`mx-10 mb-10 md:mb-0 md:mx-0`}
          />
          <h1 className="uppercase text-white font-['Encode Sans SC'] md:mx-5 mx-10 text-5xl first-letter:text-6xl">
            About Me
          </h1>
        </div>
        <div className="flex">
          <p className="font-['Inder'] text-greyish md:text-md text-lg w-2/3 md:mx-20 md:-my-10 my-10 mx-auto lg:mb-10 xl:text-2xl">
            ♦ I am very curious and highly passionate about astronomy and trying
            to implement it in technological aspects. <br /> <br /> ♦ I am
            acquired with latest technologies needed for modern software
            development. <br /> <br />♦ I value time, am modest and persistent.
            I am fast-learner and optimistic programmer and prefers to work in
            community.
          </p>
          <Moon
            width={80}
            height={80}
            className={`w-10 h-10 md:w-20 md:h-20 mr-3`}
          />
        </div>
        {/* <Star height={55} width={55} className={``} /> */}
        <button className="font-['Inder'] font-medium bg-button py-3 px-5 text-lg rounded-2xl md:mx-20 mx-10 md:my-20 inline-flex w-fit">
          <Link href={"https://www.github.com/Mohit-Aasirwal"}>
            {" "}
            Learn More {`>`}{" "}
          </Link>{" "}
        </button>
        <Starcollection
          width={50}
          height={50}
          className={`relative bottom-20 left-2/3`}
        />
      </div>
      <div className="specialdiv2 h-screen hidden md:flex md:w-1/3 bg-darkblack"></div>
    </div>
  );
};

export default About;
