
import { Info } from "../User";

import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const About = () => {
    const [opened,{open,close}] = useDisclosure(false);

    return(
       <>
        <div className="flex relative overflow-hidden justify-around items-center font-mono px-16 h-[80vh]" id="bg">
            <Particles className="absolute -z-20 inset-0" quantity={1000} ease={80} vx={.1} vy={.1} color="#64FFDA" refresh />
            <div className="ml-20 w-3/5 flex flex-col">
                <div className="text-primaryColor text-3xl">Merhaba, Ben</div>
                <div className="text-white text-[4.25rem] font-extrabold">{Info.name}</div>
                <div className="text-white text-4xl flex font-semibold"><span className="text-primaryColor"><Typewriter options={{strings: Info.stack, autoStart: true, loop: true}} /></span></div>
                <div className="text-textColor text-xl w-[90%] text-justify my-8 font-semibold">{Info.bio}</div>
                <div className="flex gap-3">
                    <Button onClick={open} className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA">CV İncele</Button>
                    <Button onClick={open} className="!text-primaryColor !w-fit" size="lg" variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}>Cv İndir</Button>
                </div>
            </div>
            <div className="h-fit flex justify-center items-center rounded-full mr-14 w-fit" id="photo">
                <NeonGradientCard className="w-[325px] h-[325px] items-center justify-center text-center">
                    <img className="w-full h-full rounded-full" src="/" alt="profile" />
                </NeonGradientCard>
            </div>
        </div>
        <ResumeViewer opened={opened} close={close} />
       </>
    )
}

export default About; 