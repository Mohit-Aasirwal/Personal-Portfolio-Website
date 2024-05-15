import React from "react";
import Telescope from "../../assets/SVG/telescope";
import Image from "next/image";
import Modal from "./Modal";

const data = [
  {
    name: "DAVV Admin",
    image: "/davv-admin.png",
    link: "https://davv-admin.vercel.app",
    description:
      "It is admin portal for DAVV Grievance Redressal system. DAVV grievance redressal system allows students to file their day-to-day complaints and grievances on a single application. It includes grievances from different departments. The DAVV Admin Portal essentially segregate grievances from different departments and provides the department incharges with complaints and grievances in their department. After the department incharge is informed with the grievance, he/she can forward it to any concerned person and can make a good use of software in doing all the essential processes for the resolution. The project is made with Typescript, NextJS, TailwindCSS and NestJS, Postgres, etc.",
  },
  {
    name: "IETians Diary",
    image: "/ietians-diary.png",
    link: "https://github.com/LedgerChirp/ietians-diary",
    description:
      "IETians Diary is a react native application for mobile devices which avail all the students with the latest notes, curriculum, syllabus, notices and day-to-day happenings of the college. It is a one-stop platform for all the academic necessities of IET students. The project is made with Expo (A React Native Framework), Typescript and NestJS with Postgres. It includes features such as attendance tracking, notices, previous year papers, notes, syllabus etc. ",
  },
  {
    name: "Finsure",
    image: "/finsure.png",
    link: "https://github.com/LedgerChirp/moi-flight-insurance",
    description:
      "Finsure is a Delayed Flight Insurance Application that focuses on providing incentives to the people who are frustated of delaying flights. Flights are the fastest mode of transportation and is preferred because of its punctuality and time efficiency. But in today's scenario, most of the flights got delayed by some unavoidable circumstances and public insanity. So to compensate the time of individuals who value every minute, we made Finsure. Finsure is powered by MOI blockchain and automates the payback in terms of MOI tokens to the users that paid the premium in same medium. The choice of MOI blockchain is because of its hyperparallel consensus and proof of context. More about MOI here: https://moi.technology/",
  },
  {
    name: "Remotify",
    image: "/remotify.png",
    link: "",
    description:
      "Remotify is a unifying platform for all the Remote work tools. It is built to avail easy access to all the remote workers to the tools they use in their professional life in form of a suite. The major features of this application involves seamless collaboration between different sub-products in this overall project. It is made with some of the latest technologies such as NextJS(Typescript), NestJS, GraphQL APIs, Postgres, etc. Currently under development.",
  },
  {
    name: "LedgerChirp",
    image: "/ledgerchirp.png",
    link: "https://ledgerchirp.vercel.app",
    description:
      "Showcase website for the SaaS agency LedgerChirp, founded by Mohit Aasirwal, Mustafa Azad and Kanishk Tiwari. The SaaS provides services in domain of web development, application development, blockchain and cybersecurity. The agency is self-driven without any external support and determined to get their clients the best work. The showcase website is made with NextJS, TailwindCSS and Typescript.",
  },
  {
    name: "E-Cell IET-DAVV",
    image: "/ecell.png",
    link: "https://ecellietdavv.in",
    description:
      "E-Cell or Entrepreneurship Cell IET-DAVV is a college club for incubation to university startups. It is run by All India Council of Technical Research(AICTE) and has 100+ members in the college including the leaders of the club. We developed this website in my second year of college. This website is also powered by NextJS, TailwindCSS and SanityCMS.",
  },
  {
    name: "Feedbox Club Website",
    image: "/feedbox.png",
    link: "https://clubfeedbox.vercel.app",
    description:
      "FeedBox is an Inter-college club for that trains and educates students in field of digital marketing and PR. It is run by company FEEDBOX which is run by our alumni Yash Kulshreshtha Sir. FeedBox is currently operative in 5+ colleges in Indore and has around 200+ members. We developed this website for showcasing the internals of club FeedBox which is running in IET-DAVV. This website is powered by NextJS, TailwindCSS and StrapiCMS.",
  },
  {
    name: "Voila",
    image: "/voila.png",
    link: "https://getfromvoila.vercel.app",
    description:
      "Voila is a online marketplace and shopping website which is essentially a clone of google shopping with real results from google shopping. It uses OxyLabs as a scraping service which does web scraping from the google shopping and show realtime results for all the products that are available there. It is a learning project which enabled me know about REST APIs, web scraping and integrated development.",
  },
  {
    name: "Portfolio Website",
    image: "/portfolio.png",
    link: "https://mohitaasirwal.tech",
    description:
      "My portfolio website that contains all the professional things about me. It is made by me in first year of college with NextJS, StrapiCMS and TailwindCSS. It is a conceptual project that helped me learn frontend development and integration of APIs in the project. This project took a long time to build due to other priorities.",
  },
];

const Projects = () => {
  return (
    <div id="Experience">
      <div className="flex h-fit flex-row bg-secondaryblack">
        <div className=" md:w-2/3 md:my-20 flex text-center flex-col ">
          <div className="flex">
            <h1 className="uppercase font-['Encode Sans SC'] text-5xl my-20 w-full text-center mx-auto  first-letter:text-6xl">
              Projects
            </h1>
            <Telescope
              width={100}
              height={100}
              className={`opacity-20 my-20`}
            />
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-20 mx-10">
            {data &&
              data.map((value, id) => {
                return (
                  <Modal
                    key={id}
                    name={value.name}
                    description={value.description}
                    image={value.image}
                    link={value.link}
                  />
                );
              })}
          </div>
        </div>
        <div className="specialdiv2 hidden md:block h-screen md:w-1/3 md:bg-darkblack">
          <Image
            src={
              "https://media0.giphy.com/media/9D58IXlnmyl1zPYZHy/giphy.gif?cid=ecf05e47sy2llaf5mbh02twngm3a7ftejm209lbtasqwcdmn&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            }
            width={1000}
            height={1000}
            alt="nebula"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
