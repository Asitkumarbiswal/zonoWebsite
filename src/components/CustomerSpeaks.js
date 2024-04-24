
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from 'next/image';
import { BiSolidQuoteAltRight } from "react-icons/bi";

export default function CustomerSpeaks(){
    const speakItems = [
        {"icons":<Image className="pe-2 rounded-full" width={100} height={100} alt="icons" src="/Home/Speak_icon.png" />, title:"Vishal Distributors, Hyderbad", text:"ZoAI is acting like my assistant in replying to my customers automatically..."},
        {"icons":<Image className="pe-2 rounded-full" width={100} height={100} alt="icons" src="/Home/Speak_icon.png" />, title:"Vishal Distributors, Hyderbad", text:"ZoAI is acting like my assistant in replying to my customers automatically..."},
        {"icons":<Image className="pe-2 rounded-full" width={100} height={100} alt="icons" src="/Home/Speak_icon.png" />, title:"Vishal Distributors, Hyderbad", text:"ZoAI is acting like my assistant in replying to my customers automatically..."}
        
      ];
    return (
        <div className="bg-white w-[100%] px-[5%] py-8 mx-auto md:w-[99%] md:mx-0">
            <h1 className="text-[24px] md:text-[36px] pb-4">#CustomerSpeaks</h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4 lg:gap-10">
                    {speakItems.map((item, index) => (
                    <div className="flex flex-row p-5 border rounded-xl bg-primary-100 shadow-xl" key={`${item}-${index}`}>
                        <div className="flex justify-center items-start">
                        {item.icons}
                        </div>
                        <div className="flex flex-col">
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="text-xs font-normal">{item.text}</p>
                        
                    </div>
                    <BiSolidQuoteAltRight color="gray" opacity={0.5} size={24} />
                    </div>
                    ))}
                </div>
        </div>
        
    )
}

