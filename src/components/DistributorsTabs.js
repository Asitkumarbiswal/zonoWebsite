import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import {DistributorsTabsDetails} from  '@/utils/RouterData'
import {Button} from "@nextui-org/react";
import React,{useState} from 'react';

export default function DistributorTabs(){
    const [activeTab, setActiveTab] = useState("zotok")
    const handleSetActive = (to) => {
        setActiveTab(to);
      };
    return (
        <Card className="w-1/5 md:w-[23%] lg:w-[19%] xl:w-[18.5%] 2xl:w-[19.5%] h-screen pl-1 pt-2 md:mt-2 ml-[3.8%] md:ml-[6%] lg:ml-[6%] xl:ml-[5.5%] 2xl:ml-[4%] fixed hidden md:block">
          <CardBody>
          <h2 className="pb-2 md:text-sm lg:text-base font-normal lg:ps-2">I am a Distributors</h2>
            <ul className="space-y-2 justify-start text-left">
                {DistributorsTabsDetails.map((eachEle)=>(
                    <li key={eachEle.id}>
                        <Button variant="light" className={`flex flex-row px-2 my-2 mx-1 ${
                    activeTab === eachEle.id ? 'bg-[#35A7E8] w-full rounded-full text-white hover:bg-[#35A7E8] hover:text-black text-sm' : 'text-[#091E42] w-full rounded-full text-sm'
                  }`}>
                            <Link className="flex flex-row w-full gap-2" to={eachEle.id} spy={true} smooth={true} offset={-150} duration={500} key={eachEle.text} classID="w-full flex flex-row justify-center" onSetActive={handleSetActive}>
                                <Image width={22} height={22} alt="icon" src={eachEle.icon} />
                                <div>{eachEle.text}</div>
                            </Link>
                        </Button>
                    </li>
                ))}
            </ul>
          </CardBody>
        </Card>
    )
}