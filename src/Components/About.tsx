import { useEffect, useState } from "react";
import { Info } from "../User";
//@ts-ignore
import NET from "vanta/src/vanta.net";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";

const About = () => {
    const [net,setNet] = useState<any>(null);
    const [trunk,setTrunk] = useState<any>(null);
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
        <div className="flex overflow-hidden justify-around items-center font-mono px-16 h-[80vh]" id="bg">
            <div className="ml-20 w-3/5 flex flex-col">
                <div className="text-primaryColor text-3xl">Merhaba, Ben</div>
                <div className="text-white text-[4.25rem] font-extrabold">{Info.name}</div>
                <div><span className="text-primaryColor text-3xl"><Typewriter options={{strings: Info.stack, autoStart: true, loop: true}}/></span></div>
                <div className="text-textColor text-xl w-[90%] text-justify my-8 font-semibold">{Info.bio}</div>
                <Button component="a" href="https://www.github.com/themfg63" target="_blank" className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA">CV İndir</Button>
            </div>
            <div className="fixed inset-0 flex justify-center items-center overflow-hidden rounded-full w-[25vw] h-[55vh] z-10" id="photo">
  <img className="w-[85%] h-[85%] rounded-full shadow-xl object-cover" src="/profile.jpg" alt="profile" />
</div>

        </div>
    )
}

export default About;