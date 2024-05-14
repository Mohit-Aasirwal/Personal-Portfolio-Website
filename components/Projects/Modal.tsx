import React, { useState } from "react";
import Cross from "../../assets/SVG/cross";
import Image from "next/image";
import Link from "next/link";

interface props {
  name: string;
  image: string;
  link: string;
  description: string;
}

const Modal = ({ name, image, link, description }: props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <div
        className="flex bg-white w-28 h-28 rounded-full shadow-inner shadow-black drop-shadow-xl hover:-translate-y-3 ease-linear duration-150"
        onClick={handleOpen}
      >
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      {open && (
        <div className="md:w-2/3 w-[90%] md:rounded-3xl select-none shadow-inner fixed shadow-black text-black top-1/4 left-5 scroll-smooth md:top-52 md:left-60 overflow-scroll md:overflow-hidden z-50 bg-white h-2/3">
          <div className="flex flex-col justify-start ">
            <div className="flex justify-between mt-8 mx-10">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-slate-900 to-blue-900 md:text-3xl text-2xl font-bold">
                {name}
              </h1>
              <button
                onClick={handleClose}
                className="hover:bg-blue-400 w-fit h-fit p-2 rounded-full cursor-pointer"
              >
                <Cross />
              </button>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:ml-10 mx-5 md:mx-0">
              <div className="md:w-1/2 h-fit flex py-5 text-left flex-col justify-start items-start space-y-10">
                <p className="">{description}</p>
                <button className="text-black bg-cyan-400 hover:bg-cyan-300 px-3 py-2 rounded-xl">
                  <Link href={link}>More on This!</Link>
                </button>
              </div>
              <div className="md:w-1/2 md:pb-10 md:px-10 flex justify-center items-center">
                <Image
                  src={image}
                  alt="images"
                  width={1000}
                  height={1000}
                  className="w-full rounded-lg drop-shadow-lg "
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
