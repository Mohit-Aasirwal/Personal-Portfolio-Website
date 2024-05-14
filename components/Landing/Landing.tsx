import Link from "next/link";
import Image from "next/image";
import FrontSVG from "../../assets/SVG/frontsvg";
import Star from "../../assets/SVG/star";
import StarCollection from "../../assets/SVG/starcollection";
import Github from "../../assets/SVG/github";
import LinkedIn from "../../assets/SVG/linkedin";
import Twitter from "../../assets/SVG/twitter";
import Setup from "../../assets/microinteractions/sphere";
// import Script from "next/script";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFetch } from "../../hooks/useFetch";

const Landing = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  // // console.log(description);
  // const { data, loading } = useFetch("http://localhost:1337/api/Name");
  // if (!loading) {
  //   console.log(data.attributes.Name);
  // }

  useEffect(() => {
    // Define the URL you want to make a GET request to
    const url1 = "http://localhost:1337/api/Name";
    const url2 = "http://localhost:1337/api/profile-descriptions";
    const url3 = "http://localhost:1337/api/profile-image";
    // Use Axios to make the request
    axios
      .get(url1)
      .then((response) => {
        // Handle successful response
        // console.log(response.data.data.attributes.Name);
        setName(response.data.data.attributes.Name);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
    axios
      .get(url2)
      .then((response) => {
        // Handle successful response
        // console.log(response.data.data.attributes.profile_descriptions);
        setDescription(response.data.data.attributes.profile_descriptions);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
    axios
      .get(url3)
      .then((response) => {
        // console.log(response.data.data.attributes.profile_image.url);
        // setImage(response.data.data.attributes.profile_image.url);
      })
      .catch((error): any => {
        console.log(error);
      });
  }, []);
  // useEffect(() => {
  //   // Initialize GSAP here
  //   // Example animation using GSAP
  //   gsap.fromTo(
  //     ".home",
  //     { opacity: 0, scale: 0.5 },
  //     { opacity: 1, duration: 1, delay: 1, stagger: 0.5, scale: 1 }
  //   );
  //   // gsap.to(".home", { opacity: 1 });
  // }, []);

  return (
    <>
      <div
        id="Home"
        className="md:flex md:flex-row md:h-screen flex flex-col bg-secondaryblack home"
      >
        <div className="md:w-2/3 flex items-end specialdiv bg-darkblack">
          {/* <Setup/> */}
          {/* <Sphere /> */}
          <Image
            priority
            src={
              "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGEwaGFyOXVjMzdpMjRjdDdwaXhyZGI3ZXc4NTB2ODB6a2VkZmcxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cmegx6SssTKmEFEcwj/giphy.gif"
            }
            alt="earth"
            width={400}
            height={400}
            className="w-full h-fit"
          />
          <Image
            priority
            src={"/profile.png"}
            alt="profile"
            width={450}
            height={450}
            className={`z-auto xl:w-1/2 absolute`}
            // loading="lazy"
          />
        </div>
        <div className="md:w-1/3 flex flex-col md:mt-20 xl:my-auto lg:mt-32 text-center md:text-left">
          <StarCollection
            width={50}
            height={50}
            className={`relative top-96 -right-3 md:absolute md:right-56 md:top-3/4 xl:left-[52rem] lg:left-[35rem] md:left-[27rem]`}
          />
          {/* <FrontSVG height={100} width={866} /> */}
          <Star
            height={50}
            width={50}
            className={`mx-72 md:relative md:top-10 md:left-40 md:mx-0 z-10`}
          />
          <h1 className="font-['Itim']  font-light text-6xl">Hola!</h1>
          <h1 className="font-['Itim'] font-light text-6xl mb-14">
            Soy {name} Mohit
          </h1>
          <div className="flex flex-col justify-center">
            <p className="leading-loose font-normal text-greyish font-['Inder'] text-xl">
              -Cosmology Stan
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
      {/* <Script src="../../assets/microinteractions/LandingAnimation.js" defer /> */}
    </>
  );
};

export default Landing;
