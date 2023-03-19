import React from "react";
import Saturn from "../../assets/SVG/saturn";
const Skills = () => {
  return (
    <div id="Skills" className="h-screen bg-secondaryblack">
      <Saturn
        width={100}
        height={100}
        className={`opacity-20 md:w-20 md:h-20 md:ml-10 w-16 h-16 inline-flex`}
      />
      <h1 className="text-5xl first-letter:text-6xl uppercase ml-10 text-center md:mx-0 inline-flex w-4/5 items-center tracking-wide justify-center font-['Encode Sans SC']">
        Acquired Skills
      </h1>
      <div className="specialdiv3 bg-darkblack w-screen h-screen"></div>
    </div>
  );
};

export default Skills;
