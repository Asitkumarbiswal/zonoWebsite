"use client"

import React,{useState} from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { AiOutlineUser, AiOutlineApartment, AiOutlinePartition, AiTwotoneGift, AiTwotoneBulb, AiOutlineAppstore, AiOutlineDollar} from "react-icons/ai";

import Image from 'next/image';
import MenuIcon from '../../public/menuIcon.svg'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { RoutersPagesData } from "@/utils/RouterData";
import { usePathname } from 'next/navigation';

export default function NavbarPagess(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const currentPath = usePathname()
    const isActive =(path)=>{
        return currentPath === path 
       }
   return (
        <div>
        <nav className="w-[4.5%] md:w-[7.5%] lg:w-[6.5%] xl:w-[6%] 2xl:w-[4.5%] md:flex flex-col hidden justify-between lg:ml-2 z-20 bg-slate-800 rounded-md text-gray-300 font-light text-dxs mx-auto py-4 h-screen lg:mt-2 fixed">
           
            <ul>
                {RoutersPagesData.map((eachRouter)=>(
                    <li className="flex flex-col pb-3 justify-center text-center" key={eachRouter.key}>
                        <Link href={eachRouter.RoutePath} className="flex flex-col justify-center items-center">
                            <span className="mx-auto"><Image width={32} height={32} alt="icons" src={eachRouter.Icon}/></span>
                            <p className={isActive(eachRouter.RoutePath)?'text-white text-dxs ':'text-gray-400 text-dxs '}>{eachRouter.page}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        <Navbar id="m_nav_sc" className="md:hidden fixed" onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                   
                    icon={ <Image id="m_menu_icon" className="outline-none" src="/menuIcon.svg" alt="Your Image" width={80} height={60} />}
                    />
                    <NavbarBrand>
                
                    <p className="font-bold text-inherit text-xl"><a href="/">ZöTok</a></p>
                    </NavbarBrand>
            </NavbarContent>

                <NavbarMenu>
                    {RoutersPagesData.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                        color={
                            index === 3 ? "primary" : "foreground"
                        }
                        className="w-full gap-2"
                        href={item.RoutePath}
                        size="base"
                        >
                        
                        {<Image width={32} height={32} alt="icons" src={item.Icon}/>}
                        {item.page}
                        </Link>
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
   )
}