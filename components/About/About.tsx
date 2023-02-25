import React from "react";
import StarMoon from "../../assets/SVG/moonwithstar";
const About = () => {
  return (
    <div className="flex flex-row bg-secondaryblack">
      <div className="w-2/3">
        <StarMoon width={50} height={50} className={``} />
        <h1 className="font-['EncodeSansSC']">ABOUT ME</h1>
      </div>
      <div className="specialdiv2 h-screen w-1/3 bg-darkblack"></div>
    </div>
  );
};

export default About;
