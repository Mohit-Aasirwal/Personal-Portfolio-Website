import React from "react";
import Saturn from "../../assets/SVG/saturn";
const Skills = () => {
  return (
    <div id="Skills" className="h-screen bg-secondaryblack">
      <Saturn width={100} height={100} className={`opacity-20 inline-flex`} />
      <h1 className="text-5xl first-letter:text-6xl uppercase inline-flex w-4/5 items-center tracking-wide justify-center font-['Encode Sans SC']">
        Acquired Skills
      </h1>
      <div className="specialdiv3 bg-darkblack w-screen h-screen"></div>
    </div>
  );
};

export default Skills;
