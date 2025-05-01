import { useEffect, useState } from "react";
import { Info } from "../User";
//@ts-ignore
import NET from "vanta/src/vanta.net";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";

const About = () => {
    const [net,setNet] = useState<any>(null);
    const [trunk,setTrunk] = useState<any>(null);
    const [opened,{open,close}] = useDisclosure(false);

    useEffect(() => {
        if(!net){
            setNet(NET({
                el: "#bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x64FFDA,
                backgroundColor: 0x112240,
                size: 2.8
            }))
        }
        if(!trunk){
            setTrunk(TRUNK({
                el: "#photo",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x64FFDA,
                backgroundColor: 0x112240,
                spacing: 0,
                chaos: 4.00
            }))
        }
        return() => {
            if(net) net.destroy();
            if(trunk) trunk.destroy();
        }
    },[])

    return(
       <>
        <div className="flex overflow-hidden justify-around items-center font-mono px-16 h-[80vh]" id="bg">
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
            <div className="h-[50vh] flex justify-center items-center overflow-hidden rounded-full mr-14 w-[25vw]" id="photo">
                <img className="w-[90%] h-[90%] rounded-full shadow-xl" src="/" alt="profile" />
            </div>
        </div>
        <ResumeViewer opened={opened} close={close} />
       </>
    )
}

export default About; 