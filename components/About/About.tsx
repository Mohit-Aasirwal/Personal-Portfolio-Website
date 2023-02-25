import StarMoon from "../../assets/SVG/moonwithstar";
import Moon from "../../assets/SVG/moon";

const About = () => {
  return (
    <div className="flex flex-row bg-secondaryblack">
      <div className="w-2/3 flex flex-row justify-center my-20 ">
        <StarMoon width={40} height={40} className={`mx-96 justify-center`} />
        <h1 className="font-['Encode Sans SC'] inline-flex justify-start font-light text-5xl ">
          ABOUT ME
        </h1>
        <p className="font-['Inder'] text-greyish text-2xl mx-20">
          I am very curious and highly passionate about astronomy and trying to
          implement it in technological aspects. I am acquired with latest
          technologies needed for modern software development. I value time, am
          modest and persistent. I am fast-learner and optimistic programmer and
          prefers to work in community.
        </p>
        {/* <Moon /> */}
      </div>
      <div className="specialdiv2 h-screen w-1/3 bg-darkblack"></div>
    </div>
  );
};

export default About;
