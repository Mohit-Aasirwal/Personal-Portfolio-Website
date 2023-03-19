import React from "react";
import Shuttle from "../../assets/SVG/rocket";
const Resume = () => {
  return (
    <div id="Resume" className="flex bg-secondaryblack flex-col">
      <Shuttle
        width={100}
        height={100}
        className={`opacity-40 relative top-10 w-16 h-16 md:h-20 md:w-20 md:mx-10 mx-3`}
      />
      <h1 className="text-5xl font-[Encode Sans SC] uppercase first-letter:text-6xl text-center w-full">
        Resume
      </h1>
      <iframe
        src="https://mohit-aasirwal.github.io/Resume/"
        width="100%"
        height="500"
        allowFullScreen={true}
        className="mt-10"
      ></iframe>
    </div>
  );
};

export default Resume;
