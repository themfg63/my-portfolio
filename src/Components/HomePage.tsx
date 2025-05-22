import { useEffect, useState } from "react"
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import Mail from "./Mail";
import Social from "./Social";
import { Loader } from "./Loader";
import { Toaster } from 'react-hot-toast';

const HomePage = () => {
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },5000)
    },[]);

    return <div className={`focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
        {
            loading !== true ? <>
            <Toaster />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Certificates />
            <Experience />
            <Contact />
            <Footer />
            <Mail />
            <Social />
            </>:
            <Loader />
        }
    </div>
};

export default HomePage;