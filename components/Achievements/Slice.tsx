import React from "react";
import Image from "next/image";
interface props {
  description: string;
}

const Slice = ({ description }: props) => {
  return (
    <div className="bg-black backdrop-blur-xl rounded-xl my-3 w-fit md:px-10 mr-10 md:mr-0 h-20 items-center flex">
      <Image
        src={"/medal.png"}
        width={100}
        height={100}
        alt="medal"
        className="md:w-20 md:h-20"
      />
      <h1 className=" text-white md:text-xl text-sm ">{description}</h1>
    </div>
  );
};

export default Slice;
