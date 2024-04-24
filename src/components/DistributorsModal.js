import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

export default function DistributorsModal(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");
    return (
        <div className="flex flex-col gap-2 md:hidden">
        <Button onPress={onOpen} className="max-w-fit">Increased Turnover</Button>
        {/* <RadioGroup
          label="Select modal placement"
          orientation="horizontal"
          value={modalPlacement}
          onValueChange={setModalPlacement}
        >
          <Radio value="auto">auto</Radio>
          <Radio value="top">top</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="center">center</Radio>
          <Radio value="top-center">top-center</Radio>
          <Radio value="bottom-center">bottom-center</Radio>
        </RadioGroup> */}
        <Modal className="p-0 m-0" 
          isOpen={isOpen} 
          placement={modalPlacement}
          onOpenChange={onOpenChange} 
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 font-normal text-xl text-default-800">Increased Turnover</ModalHeader>
                <ModalBody>
                <Card className="w-full flex md:hidden flex-col p-0 shadow-none">
            <CardBody className="flex flex-col justify-center items-center w-full p-0 m-0">
              <div className="w-full h-full p-0 mx-auto"><Image alt="banner" className="w-full h-full max-w-full" src="/I am DT • What does Zono do /Group 377860@2x.png" /></div>
              </CardBody>
              <CardFooter className="flex flex-col justify-start items-start px-0">
                <h2 className="text-2xl pb-4 text-left justify-start hidden">Increased Turnover</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-1 pb-4 text-xs text-default-600 lg:pe-8">
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
                  <div className="flex flex-row gap-2 pb-4 text-xs text-default-600 lg:pe-8">
                    <div><RiCheckboxCircleFill color="#3AD394" size={30} /></div>
                     ZoTok allows 24X7 order processing - with automated quotations an dorder receipt - with no enquiry left unattended.</div>
                  </div>
                <div className="w-full flex justify-end">
                <Button radius="full" className="bg-gradient-to-tr from-[#8546DB] to-orange-500 text-white font-semibold shadow-lg">
                <IoCall /> Let's Talk Business</Button></div>
              </CardFooter>
          </Card>
                </ModalBody>
                {/* <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter> */}
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    )
}