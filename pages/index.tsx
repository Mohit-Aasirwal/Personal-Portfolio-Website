import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import OpenSource from "../components/Open-Source/OpenSource";
import Achievements from "../components/Achievements/Achievements";
import Endorsements from "../components/Endorsements/Endorsements";
import Resume from "../components/Resume/Resume";
import Footer from "../components/Footer/Footer";

//specialdiv properties are mentioned in globals.css

export default function Home() {
  return (
    <>
        <Landing />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Achievements />
        <Endorsements />
        <Resume />
        <Footer />

    </>
  );
}
