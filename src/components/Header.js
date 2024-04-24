
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from 'next/image';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function Header(){
    return (
        <div className="header_section box-border md:fixed md:w-full md:z-40 md:border-t-[20px] md:border-[#ECF0F6]">
        <Card className="md:flex hidden flex-col fixed z-20 w-full md:w-[67.5%] lg:w-[72.5%] xl:w-[74%] 2xl:w-[74.5%] md:mt-[-10px] h-16">
            <CardBody className="flex flex-row justify-between items-center">
            <div>
                <a href="/"><Image width={100} height={100} alt="logo" src="/ft_logo.png" /></a>
            </div>
            <div>
            <Button variant="light"><Image width={16} height={16} alt="logo" src="/curency_icon.svg" /> English <span><IoIosArrowDown /></span></Button>
            </div>
            </CardBody>
        </Card> 
        </div>
        
    )
}

