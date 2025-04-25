
import About from "./About";
import Certificates from "./Certificates";
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
        <Mail />
        <Social />
    </>
}

export default HomePage;