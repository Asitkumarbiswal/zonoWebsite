import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from 'next/image';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { title } from "process";

export default function ChatBoxHome(){
    const senderItems = [
        {"icons":<Image className="" src="/Home/ss_agency.png" width={40} height={40} />, title:"Shridhar Agencies", text:"Yeah Zotok kya hai? Aur yeah AI on Whatsapp kya hai?", time:"10:10 AM"},
        {"icons":<Image className="" src="/Home/sv_agency.png" width={40} height={40} />, title:"SV Distributors & Dealers", text:"Koi naya app hai? Is mein Orders kaise banega?", time:"12:51 PM"}
    ]
    const userItems = [
        {"icons":<Image className="" src="/Home/ss_agency.png" width={40} height={40} />, text:"Zotok is a Supply Chain AI product that simplifies the entire Order to Cash cycle directly on whatsApp", time:"12:52 PM"},
        {"icons":<Image className="" src="/Home/ss_agency.png" width={40} height={40} />, text:"I am sure that you get WhatsApp based orders image/csv/voice note", time:"12:53 PM"}
    ]
    return (
        <div className=" w-[96%] mx-auto md:mx-0 md:w-[99%] bg-white">
        <Card className="box-border rounded-none shadow-none w-[100%] md:w-[84%] m-auto">
            <CardBody className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="w-full md:w-[40%]">
               <p className=" text-[22px] md:text-[30px] text-center md:text-left">Zotok is a Supply Chain AI product that simplifies the entire Order to Cash cycle directly on WhatsApp</p>
            </div>
            <div className="w-full md:w-[50%]">
                <Card className="rounded-none">
                <CardHeader className="flex gap-3 bg-[#132C45] text-white rounded-t-xl px-5">
                <Image alt="Chat logo" height={36} radius="sm" src="/Home/ss_agency.png" width={36} />
                <div className="flex flex-col">
                <p className="text-md">Zotok.Ai</p>
                <p className="text-small text-default-300">Shridhar Agencies, Sv Distributor & Dealers, Balaji Wholesalers. +2</p>
                </div>
            </CardHeader>
            <CardBody className="bg-[#f1f1f1] px-5 py-5 overflow-y-scroll max-h-[500px]">
            <div className="w-full text-black border-b-1 border-default-300 relative flex justify-center mt-5 mb-8">
                        <p className="w-auto px-6 py-2 absolute text-center bg-white mx-auto rounded-full border border-default-400 top-[-20px]">Orders</p>
                    </div>
           <div id="orderSection"> 
            {senderItems.map((item, index) => (
                    <div className="flex flex-row gap-4 pb-2 py-2" key={`${item}-${index}`}>
                        <div className="flex justify-center items-start">
                        {item.icons}
                        </div>
                        <div className="flex flex-col bg-white p-4">
                        <h3 className={`text-sm font-medium pb-1 ${item.title==="Shridhar Agencies"?"text-green-700":"text-red-500"}`}>{item.title}</h3>
                        <p className="text-base font-normal w-full max-w-60 leading-5">{item.text}</p>
                        <p className=" flex flex-row gap-2 justify-end text-xs text-right text-default-500">{item.time}<IoCheckmarkDoneSharp className="text-primary" size={14} /></p>
                        </div>
                    
                    </div>
                    ))} 
                    
                    {userItems.map((item, index) => (
                    <div className="flex flex-row-reverse gap-4 pb-2 py-2" key={`${item}-${index}`}>
                        <div className="flex justify-center items-start">
                        {item.icons}
                        </div>
                        <div className="flex flex-col bg-success-100 p-4">
                        <h3 className={`text-sm font-medium pb-1 ${item.title==="Shridhar Agencies"?"text-green-700":"text-red-500"}`}>{item.title}</h3>
                        <p className="text-base font-normal w-full max-w-60 leading-5">{item.text}</p>
                        <p className=" flex flex-row gap-2 justify-end text-xs text-right text-default-500">{item.time}<IoCheckmarkDoneSharp className="text-primary" size={14} /></p>
                        </div>
                    
                    </div>
                    ))}
                    </div>
                    <div className="w-full text-black border-b-1 border-default-300 relative flex justify-center mt-8 mb-8">
                        <p className="w-auto px-6 py-2 absolute text-center bg-white mx-auto rounded-full border border-default-400 top-[-20px]">Invoices & Payments</p>
                    </div>
                    <div id="paymentSection"> 
            {senderItems.map((item, index) => (
                    <div className="flex flex-row gap-4 pb-2 py-2" key={`${item}-${index}`}>
                        <div className="flex justify-center items-start">
                        {item.icons}
                        </div>
                        <div className="flex flex-col bg-white p-4">
                        <h3 className={`text-sm font-medium pb-1 ${item.title==="Shridhar Agencies"?"text-green-700":"text-red-500"}`}>{item.title}</h3>
                        <p className="text-base font-normal w-full max-w-60 leading-5">{item.text}</p>
                        <p className=" flex flex-row gap-2 justify-end text-xs text-right text-default-500">{item.time}<IoCheckmarkDoneSharp className="text-primary" size={14} /></p>
                        </div>
                    
                    </div>
                    ))} 
                    
                    {userItems.map((item, index) => (
                    <div className="flex flex-row-reverse gap-4 pb-2 py-2" key={`${item}-${index}`}>
                        <div className="flex justify-center items-start">
                        {item.icons}
                        </div>
                        <div className="flex flex-col bg-success-100 p-4">
                        <h3 className={`text-sm font-medium pb-1 ${item.title==="Shridhar Agencies"?"text-green-700":"text-red-500"}`}>{item.title}</h3>
                        <p className="text-base font-normal w-full max-w-60 leading-5">{item.text}</p>
                        <p className=" flex flex-row gap-2 justify-end text-xs text-right text-default-500">{item.time}<IoCheckmarkDoneSharp className="text-primary" size={14} /></p>
                        </div>
                    
                    </div>
                    ))}
                    </div>
                    <div className="w-full text-black border-b-1 border-default-300 relative flex justify-center mt-8 mb-8">
                        <p className="w-auto px-6 py-2 absolute text-center bg-white mx-auto rounded-full border border-default-400 top-[-20px]">Marketing</p>
                    </div>
                    <div id="marketingSection"> 
            {senderItems.map((item, index) => (
                    <div className="flex flex-row gap-4 pb-2 py-2" key={`${item}-${index}`}>
                        <div className="flex justify-center items-start">
                        {item.icons}
                        </div>
                        <div className="flex flex-col bg-white p-4">
                        <h3 className={`text-sm font-medium pb-1 ${item.title==="Shridhar Agencies"?"text-green-700":"text-red-500"}`}>{item.title}</h3>
                        <p className="text-base font-normal w-full max-w-60 leading-5">{item.text}</p>
                        <p className=" flex flex-row gap-2 justify-end text-xs text-right text-default-500">{item.time}<IoCheckmarkDoneSharp className="text-primary" size={14} /></p>
                        </div>
                    
                    </div>
                    ))} 
                    
                    {userItems.map((item, index) => (
                    <div className="flex flex-row-reverse gap-4 pb-2 py-2" key={`${item}-${index}`}>
                        <div className="flex justify-center items-start">
                        {item.icons}
                        </div>
                        <div className="flex flex-col bg-success-100 p-4">
                        <h3 className={`text-sm font-medium pb-1 ${item.title==="Shridhar Agencies"?"text-green-700":"text-red-500"}`}>{item.title}</h3>
                        <p className="text-base font-normal w-full max-w-60 leading-5">{item.text}</p>
                        <p className=" flex flex-row gap-2 justify-end text-xs text-right text-default-500">{item.time}<IoCheckmarkDoneSharp className="text-primary" size={14} /></p>
                        </div>
                    
                    </div>
                    ))}
                    </div>
                    
            </CardBody>
                </Card>
            </div>
            </CardBody>
        </Card> 
        </div>
        
    )
}
