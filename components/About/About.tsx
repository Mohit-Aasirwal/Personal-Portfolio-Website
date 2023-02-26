import StarMoon from "../../assets/SVG/moonwithstar";
import Moon from "../../assets/SVG/moon";
import Star from "../../assets/SVG/star";
import Starcollection from "../../assets/SVG/starcollection";
const About = () => {
  return (
    <div className="flex flex-row bg-secondaryblack">
      <div className="w-2/3 my-20 flex flex-col ">
        <div className="flex justify-center items-center mb-16">
          <StarMoon width={40} height={40} className={``} />
          <h1 className="font-['Encode Sans SC'] mx-5 font-light text-5xl ">
            About Me
          </h1>
        </div>
        <div className="flex">
          <p className="font-['Inder'] text-greyish text-2xl w-2/3 mx-20">
            ☻ I am very curious and highly passionate about astronomy and trying
            to implement it in technological aspects. <br /> <br /> ☻ I am
            acquired with latest technologies needed for modern software
            development. <br /> <br />☻ I value time, am modest and persistent.
            I am fast-learner and optimistic programmer and prefers to work in
            community.
          </p>
          <Moon width={80} height={80} className={``} />
        </div>
        <Star height={55} width={55} className={``} />
        <button className="font-['Inder'] font-medium bg-button py-3 px-5 text-xl rounded-2xl mx-20 inline-flex w-fit">
          Learn More {`>`}{" "}
        </button>
        <Starcollection
          width={60}
          height={60}
          className={`relative bottom-20 left-2/3`}
        />
      </div>
      <div className="specialdiv2 h-screen w-1/3 bg-darkblack"></div>
    </div>
  );
};

export default About;
