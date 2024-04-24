"use client"
import Navbar from "@/components/Navbar";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {AiOutlineUserAdd, AiTwotoneWarning, AiOutlineUser} from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Header from "@/components/Header";
import { IoCall } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import DistributorTabs from "@/components/DistributorsTabs";
import DistributorsModal from "@/components/DistributorsModal";
import Footer from "@/components/Footer";
export default function distributor() {
    return (
      <main className="flex flex-row w-full justify-between m-0 md:p-0 md:bg-[#ECF0F6]">
        <DistributorTabs />
        
        
        
        
        <div className=" w-full md:w-[69%] lg:w-[74%] xl:w-[75%] 2xl:w-[75%] h-auto m-0 md:mt-0 md:ml-[31%] lg:ml-[26.5%] xl:ml-[25%] 2xl:ml-[24.5%]">
        <Header />
        
        <div className="h-[379px] w-[96%] m-auto mt-16 bg-[#E2E2FF] rounded-xl flex flex-col md:flex-row justify-around md:justify-between items-center md:mt-[54px] md:w-[99%] md:ms-0 ">
        <div>
        <h1 className="text-3xl md:text-3xl lg:text-[70px] font-normal md:pl-8 lg:pl-12 text-center md:text-left leading-none pb-4">I am a <br />Distributor</h1>
        <p className="md:hidden text-xs mx-auto w-2/3 text-center">How does a Distributor get benefit of using the Zotok Platform?</p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image width={494} height={249} alt="banner" src="/D_image01.svg" />
            </div>
        </div>

        <div className="dis_tab_mobile md:hidden my-4 mx-2">
        <h2 className="pb-4 md:text-sm lg:text-base font-normal">I am a Distributors</h2>
        <div className="w-full h-auto overflow-x-scroll">
          <div className="flex flex-row justify-round gap-6 border-none mb-3">
            <Button variant="light" className="w-full gap-0 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-2 border-primary-400 rounded-none text-primary-400 text-sm px-0 mx-0">
            <CiUser size={20} />What does ZöTok do?
            </Button>
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
            <Image width={20} height={20} alt="icon" src="/Distributors/Ordering_icon.svg" /> Ordering
            </Button> 
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
              <Image width={20} height={20} alt="icon" src="/Distributors/Collections_icon.svg" />Collections
            </Button> 
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
              <Image width={20} height={20} alt="icon" src="/Distributors/Reconsolations_icon.svg" />Reconciliation
            </Button> 
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
              <Image width={20} height={20} alt="icon" src="/Distributors/Marketing_icon.svg" />Marketing
            </Button> 
            <Button variant="light" className="w-full gap-1 min-w-fit flex justify-start text-left bg-transparent hover:bg-transparent hover:text-primary-400 border-b-0 border-primary-400 rounded-none text-default-600 text-sm px-0 mx-0">
              <Image width={20} height={20} alt="icon" src="/Distributors/Faq_icon.svg" />FAQ
            </Button> 
          </div>
         </div>
        </div>
        
      
        <div className="h-auto w-[96%] mx-auto flex flex-col lg:flex-row justify-between items-center bg-inherit">
          <div className="flex flex-col w-full lg:w-2/5 mx-0 my-8 lg:m-4 p-0 md:p-4">
          <h1 className=" text-2xl lg:text-[32px] font-normal text-left leading-none pb-4">What can ZöTok do for me?</h1>
          <p className="text-sm text-default-700 lg:text-[16px]">ZöTok allows you to communicate with all your principals and customers on a single mobile first system. It allows you to bring all your business conversations like orders, payments, schemes, campaigns, ledger etc, on an integrated WhatsApp like platform.</p>
          <DistributorsModal />
          <div className="mt-6 md:mt-10 bg-opacity-0">
            <div>
              <div className="flex flex-col gap-2">
              <Button className="w-full flex flex-col md:flex-row h-full md:h-auto justify-between items-start text-left text-black px-4 py-4 border lg:border-none lg:px-4 md:py-4 bg-white">
              <div className="flex flex-col justify-between w-full text-lg order-2 md:order-1 text-default-800">Increased Turnover 
              <div className="flex flex-row justify-between items-center"><span className="text-sm text-default-600 flex flex-row">Zotok allows the customer... </span>
              <span className="md:hidden relative bottom-2 pe-2"><BsArrowUpRight color="gray" size={24} /></span></div>
              </div>
              <div className="bg-primary-100 rounded-lg p-2 order-1 md:order-2"> <Image width={24} height={24} alt="icons" src="/increased_turnover.svg" /></div>
              </Button>
            <Button className="w-full flex flex-col md:flex-row h-full md:h-auto justify-between items-start text-left text-black px-4 py-4 border lg:border-none lg:px-4 md:py-4 bg-white">
            <div className="flex flex-col justify-between w-full text-lg order-2 md:order-1 text-default-800">Higher Profitability 
            <div className="flex flex-row justify-between items-center"><span className="text-sm text-default-600">Zotok analytics identifies...</span>
            <span className="md:hidden relative bottom-2 pe-2"><BsArrowUpRight color="gray" size={24} /></span>
            </div>
            </div>
            <div className="bg-success-100 rounded-lg p-2 order-1 md:order-2"> <Image width={24} height={24} alt="icons" src="/higher_profitability.svg" /></div>
            </Button>
            <Button className="w-full flex flex-col md:flex-row h-full md:h-auto justify-between items-start text-left text-black px-4 py-4 border lg:border-none lg:px-4 md:py-4 bg-white">
            <div className="flex flex-col justify-between w-full text-lg order-2 md:order-1 text-default-800">Peace Of Mind 
            <div className="flex flex-row justify-between items-center"><span className="text-sm text-default-600">Zotok frees up your time from...</span>
            <span className="md:hidden relative bottom-2 pe-2"><BsArrowUpRight color="gray" size={24} /></span>
            </div>
            </div>
            <div className="bg-secondary-100 rounded-lg p-2 order-1 md:order-2"> <Image width={24} height={24} alt="icons" src="/peace_of_mind.svg" /></div>
            </Button>
              </div>
            </div>
          </div>
          </div>
          <Card className="md:w-full lg:w-3/5 md:flex flex-col p-0 justify-center items-center md:my-5 lg:my-10 lg:mx-6 hidden shadow-none">
            <CardBody className="flex flex-col justify-center items-center p-0">
              <div><Image className="text-center justify-center items-center w-full h-full"src="/Zotak_DIs_mainbanner.png" /></div>
            </CardBody>
          </Card>
        </div>

        <div className="h-auto w-[96%] mx-auto flex flex-col lg:flex-row justify-between items-center bg-inherit">
        <div className="flex flex-col w-full lg:w-2/5 mx-0 my-8 lg:m-4 p-0 md:p-4">
          <h1 className=" text-2xl lg:text-[32px] font-normal text-left leading-none pb-4">What can ZöTok do for me?</h1>
          <p className="text-sm text-default-700 lg:text-[16px] mt-4">ZöTok allows you to communicate with all your principals and customers on a single mobile first system. It allows you to bring all your business conversations like orders, payments, schemes, campaigns, ledger etc, on an integrated WhatsApp like platform.</p>
        <div className="mt-6 md:mt-10 bg-opacity-0">
            <div>
            <div className="flex flex-col gap-2">
              <Button className="w-full flex flex-col md:flex-row h-full md:h-auto justify-between items-start text-left text-black px-4 py-4 border lg:border-none lg:px-4 md:py-4 bg-white lg:bg-primary-200">
              <div className="flex flex-col justify-between w-full text-lg order-2 md:order-1 text-default-800">Increased Turnover 
              <div className="flex flex-row justify-between items-center"><span className="text-sm text-default-600 flex flex-row">Zotok allows the customer... </span>
              <span className="md:hidden relative bottom-2 pe-2"><BsArrowUpRight color="gray" size={24} /></span></div>
              </div>
              <div className="bg-primary-100 rounded-lg p-2 order-1 md:order-2"> <Image width={24} height={24} alt="icons" src="/increased_turnover.svg" /></div>
              </Button>
            <Button className="w-full flex flex-col md:flex-row h-full md:h-auto justify-between items-start text-left text-black px-4 py-4 border lg:border-none lg:px-4 md:py-4 bg-white">
            <div className="flex flex-col justify-between w-full text-lg order-2 md:order-1 text-default-800">Higher Profitability 
            <div className="flex flex-row justify-between items-center"><span className="text-sm text-default-600">Zotok analytics identifies...</span>
            <span className="md:hidden relative bottom-2 pe-2"><BsArrowUpRight color="gray" size={24} /></span>
            </div>
            </div>
            <div className="bg-success-100 rounded-lg p-2 order-1 md:order-2"> <Image width={24} height={24} alt="icons" src="/higher_profitability.svg" /></div>
            </Button>
            <Button className="w-full flex flex-col md:flex-row h-full md:h-auto justify-between items-start text-left text-black px-4 py-4 border lg:border-none lg:px-4 md:py-4 bg-white">
            <div className="flex flex-col justify-between w-full text-lg order-2 md:order-1 text-default-800">Peace Of Mind 
            <div className="flex flex-row justify-between items-center"><span className="text-sm text-default-600">Zotok frees up your time from...</span>
            <span className="md:hidden relative bottom-2 pe-2"><BsArrowUpRight color="gray" size={24} /></span>
            </div>
            </div>
            <div className="bg-secondary-100 rounded-lg p-2 order-1 md:order-2"> <Image width={24} height={24} alt="icons" src="/peace_of_mind.svg" /></div>
            </Button>
              </div>
            </div>
          </div>
          </div>
          <Card className="md:w-full lg:w-3/5 md:flex hidden flex-col p-2 md:my-4 lg:mt-0 lg:mb-10 lg:mx-6 shadow-none">
            <CardBody className="flex flex-col justify-center items-center w-full">
              <div className="w-full h-full p-0 mx-auto"><Image alt="banner" className="w-full h-full max-w-full" src="/I am DT • What does Zono do /Group 377860@2x.png" /></div>
              </CardBody>
              <CardFooter className="flex flex-col justify-start items-start px-6">
                <h2 className="text-xl pb-4 text-left justify-start text-default-800">Increased Turnover</h2>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row gap-2 pb-4 text-xs text-default-600 lg:pe-8">
                    <div>
                      <RiCheckboxCircleFill color="#3AD394" size={30} /> 
                    </div>
                    ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.
                  </div>
                  <div className="flex flex-row gap-2 pb-4 text-xs text-default-600 lg:pe-8">
                    <div>
                    <RiCheckboxCircleFill color="#3AD394" size={30} />
                    </div>
                    ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.</div>
                  </div>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row gap-2 pb-4 w-1/2 text-xs text-default-600 lg:pe-8">
                    <div><RiCheckboxCircleFill color="#3AD394" size={30} /></div>
                     ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.</div>
                </div>
                <div className="w-full flex justify-end">
                <Button radius="full" className="bg-gradient-to-tr from-[#8546DB] to-orange-500 text-white font-semibold shadow-lg">
                <IoCall /> Let's Talk Business</Button></div>
              </CardFooter>
          </Card>
        </div>

      <Footer />  
        </div>
      </main>
    );
  }