
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import Image from 'next/image';
import { LiaFacebook } from "react-icons/lia";
import { TfiInstagram } from "react-icons/tfi";
import { FiTwitter } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";

export default function Footer(){
    return (
        <div className="footer_section bg-[#081f42] text-white w-full rounded-t-lg">
       <div className="flex flex-col md:flex-row justify-center md:justify-between items-start w-[90%] m-auto py-12">           
            <div className="flex flex-row justify-center md:justify-start items-center gap-2 w-full md:w-1/2 pb-5 md:pb-0">
                <Image className="w-[50px] h-[40px] md:w-[70px] md:h-[60px]" src="/footer_logo.svg" alt="Your Image" width={70} height={60} />
                <span className=" text-[22px] md:text-[34px] leading-normal font-bold">zono</span>
            </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-1/2">
        <div className="flex flex-row justify-between md:flex-col w-full md:w-auto">
           <div className="pb-4 md:pb-0">
            <h2 className="text-xl pb-1">Solutions</h2>
            <ul>
            <li><a href="/distributors" className="text-sm">Distributor</a></li>
            <li><a href="/" className="text-sm">Brand</a></li>
            <li><a href="/" className="text-sm">Retailer</a></li>
            <li><a href="/" className="text-sm">Advertiser</a></li>
            <li><a href="/" className="text-sm">Our Apps</a></li>
            </ul>
            </div>
            <div className="pb-4 md:pb-0">
            <h2 className="text-xl pb-1 pt-0 md:pt-3">ZoKnow</h2>
            <ul>
            <li><a href="/" className="text-sm">White Papers</a></li>
            <li><a href="/" className="text-sm">Blogs</a></li>
            </ul>
            </div>
        </div>
        <div className="flex flex-col pb-4 md:pb-0">
            <h2 className="text-xl pb-1">Company</h2>
            <ul>
                <li><a href="/" className="text-sm">About Us</a></li>
                <li><a href="/" className="text-sm">Partner with us</a></li>
                <li><a href="/" className="text-sm">We are hiring</a></li>
                <li><a href="/" className="text-sm">Inverstor Relations</a></li>
                <li><a href="/" className="text-sm">Contact us</a></li>
            </ul>
        </div>
        <div className="flex flex-col">
            <h2 className="text-xl pb-1">Legal</h2>
            <ul>
                <li><a href="/" className="text-sm">Terms and Conditions</a></li>
                <li><a href="/" className="text-sm">Terms of Service</a></li>
                <li><a href="/" className="text-sm">Privacy Policy</a></li>
            </ul>
        </div>
        </div>
             
        </div>
        <hr className="w-[98%] m-auto" />
        <div className="flex flex-col md:flex-row justify-between w-[90%] m-auto py-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-8">
                <p className="text-sm">2024 @ ZONO Trade Tech Pvt Ltd</p>
                <ul><li><a href="/" className="text-sm">Terms & Privacy Policy</a></li></ul>
            </div>
            <div>
                <ul className="flex flex-row justify-center items-center gap-5 pt-4 md:pt-0">
                    <li><a href="#"><LiaFacebook size={38} /></a></li>
                    <li><a href="#"><TfiInstagram size={26} /></a></li>
                    <li><a href="#"><FiTwitter size={28} /></a></li>
                    <li><a href="#"><RiYoutubeLine size={34} /></a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

