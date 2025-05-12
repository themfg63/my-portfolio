import { Timeline } from "@mantine/core"
import { IconBriefcaseFilled } from "@tabler/icons-react"
import { ExperienceInfo } from "../User"

const TimelineItem = (items:any) => {
    return items.map((item:any,index:number) => <Timeline.Item data-aos="fade-up" data-aos-duration="800" key={index} className="!pt-12 !mb-2" bullet={<IconBriefcaseFilled className="!text-bgColor" size={20}/>}>
        <div className="border flex flex-col gap-2 border-primaryColor p-4 rounded-2xl">
            <div className="flex gap-2 items-center">
                <img className="rounded-lg w-16" src={`/${item.company}.jpeg`} alt="Company" />
                <div className="flex flex-col">
                    <div className="text-white text-2xl font-semibold">{item.role}</div>
                    <div className="text-lg font-semibold text-textColor">{item.company} &#x2022; {item.date}</div>
                </div>
            </div>
            <div className="text-textColor leading-6 text-justify">
                {item.desc}
            </div>
            <div className="text-lg font-medium text-textColor">
                <span className="font-semibold text-white">Kazanımlar: </span>
                {
                    item.skills.map((skill:any,index:number) => <span key={index}>&#x2022; {skill}</span>)
                }
            </div>
        </div>
    </Timeline.Item>)
}

const Experience = () => {
    return <div className="px-16 mx-20 my-10 font-mono" id="Experiences">
        <h1 className="text-4xl mb-10 font-bold text-center text-white">
            <span className="text-primaryColor">05.&nbsp;</span>
            Deneyim
        </h1>
        <Timeline color="#64FFDA" active={5} bulletSize={30} lineWidth={2}>
            {
                TimelineItem(ExperienceInfo)
            }
            <Timeline.Item bullet={<IconBriefcaseFilled className="!text-bgColor" size={20} />}></Timeline.Item>
        </Timeline>
    </div>
}

export default Experience;