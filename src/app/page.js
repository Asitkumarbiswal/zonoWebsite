import Image from "next/image";
import {Button} from "@nextui-org/react";
import HeaderHome from "@/components/HeaderHome";
import CustomerSpeaks from "@/components/CustomerSpeaks";
import SliderBanner from "@/components/SliderBanner";
import Footer from "@/components/Footer";
import ChatBoxHome from "@/components/ChatBoxHome";
import IndustryStories from "@/components/IndustryStories"

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className=" w-full md:w-[91%] lg:w-[91%] xl:w-[92%] 2xl:w-[94%] h-auto m-0 md:ml-[8.5%] lg:ml-[8.5%] xl:ml-[8%] 2xl:ml-[6%]">
        <HeaderHome />
        <div className="h-auto md:h-[379px] w-[96%] mx-auto md:mx-0 md:w-[99%] bg-[#ffffff] flex flex-col md:flex-row justify-around md:justify-between items-center pb-8 mt-16 md:mt-16">
        <div className=" w-full md:w-1/2 order-2 md:order-1">
        <h1 className="text-3xl md:text-3xl lg:text-[44px] md:pl-8 lg:pl-12 text-center md:text-left leading-none pb-4">Simplify Buyer-Sellers Communication using AI on Whatsapp</h1>
        <p className="text-base md:pl-8 lg:pl-12 text-center md:text-left">Process Orders, Invoices, Payments, Marketing, Ledgers - everything automatically from your ERP directly to WhatsApp</p>
        </div>
        <div className="w-full md:w-1/2 text-center flex justify-center items-center order-1 md:order-2">
          <Image width={494} height={249} alt="banner" src="/Home/home_simplify_img.png" />
        </div>
        </div>
        <div className="mainbanner_slider">
        <SliderBanner />
        </div>
        
        <ChatBoxHome />
        <CustomerSpeaks />
        <div className="industry_stories bg-white w-[100%] px-[5%] pt-8 pb-16 mx-auto md:w-[99%] md:mx-0">
          <h1 className="text-[24px] md:text-[36px] pb-4">#IndustryStories</h1>
          <IndustryStories />
        </div>
        <Footer />
      </div>
    </main>
  );
}
