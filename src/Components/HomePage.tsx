
import About from "./About";
import Certificates from "./Certificates";
import Experience from "./Experience";
import Header from "./Header"
import Mail from "./Mail"
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";

const HomePage = () => {
    return <>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Experience />
        <Mail />
        <Social />
    </>
}

export default HomePage;