import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

import amex from "../Homepage/Footer/footer-assets/amex-update.webp";
import visa from "../Homepage/Footer/footer-assets/visa-update.webp";
import rupay from "../Homepage/Footer/footer-assets/rupay-update.webp";
import paytm from "../Homepage/Footer/footer-assets/paytm-update.webp";
import upi from "../Homepage/Footer/footer-assets/upi-update.webp";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const initialData = {
    cardnumber: "",
    year: "",
    cvv: "",
    name: "",
};

export const Payment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <Navbar />

            <Box>
                <Heading p={"20px 10px"}>Payment</Heading>
            </Box>
            <Flex>
                <Box
                    w={"50%"}
                    border={"1px solid lightgray"}
                    borderBottom={"none"}
                    display={"flex"}
                    justifyContent={"center"}
                >
                    <Box w={"fit-content"}>
                        <Box
                            border={"1px solid lightgrey"}
                            bg={"#F7F7F7"}
                            h={"106px"}
                            w={"539px"}
                            padding={"22px 20px"}
                        >
                            <Button
                                display="block"
                                onClick={onOpen}
                                fontSize="1rem"
                                ml={"0"}
                                mr={"auto"}
                                fontWeight={"600"}
                                colorScheme="white"
                                borderRadius={"0%"}
                                color={"teal"}
                            >
                                DebitCard/ Credit Card
                            </Button>
                            <Box p={"0 15px"}>
                                <Flex direction={"row"} gap={2}>
                                    <Box w={"27px"} h={"27px"}>
                                        <Image src={amex} />
                                    </Box>
                                    <Box w={"27px"} h={"27px"}>
                                        <Image src={visa} />
                                    </Box>
                                    <Box w={"27px"} h={"27px"}>
                                        <Image src={paytm} />
                                    </Box>
                                    <Box w={"27px"} h={"27px"}>
                                        <Image src={rupay} />
                                    </Box>
                                    <Box w={"27px"} h={"27px"}>
                                        <Image src={upi} />
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                        <Box
                            border={"1px solid lightgrey"}
                            bg={"#F7F7F7"}
                            h={"fit-content"}
                            w={"539px"}
                            padding={"22px 20px"}
                        >
                            <Button
                                display="block"
                                onClick={onOpen}
                                fontSize="1rem"
                                ml={"0"}
                                mr={"auto"}
                                fontWeight={"600"}
                                colorScheme="white"
                                borderRadius={"0%"}
                                color={"teal"}
                            >
                                Upi
                            </Button>
                        </Box>
                        <Box
                            border={"1px solid lightgrey"}
                            bg={"#F7F7F7"}
                            h={"fit-content"}
                            w={"539px"}
                            padding={"22px 20px"}
                        >
                            <Button
                                display="block"
                                onClick={onOpen}
                                fontSize="1rem"
                                ml={"0"}
                                mr={"auto"}
                                fontWeight={"600"}
                                colorScheme="white"
                                borderRadius={"0%"}
                                color={"teal"}
                            >
                                PhonePe
                            </Button>
                        </Box>
                        <Box
                            border={"1px solid lightgrey"}
                            bg={"#F7F7F7"}
                            h={"fit-content"}
                            w={"539px"}
                            padding={"22px 20px"}
                        >
                            <Button
                                display="block"
                                onClick={onOpen}
                                fontSize="1rem"
                                ml={"0"}
                                mr={"auto"}
                                fontWeight={"600"}
                                colorScheme="white"
                                borderRadius={"0%"}
                                color={"teal"}
                            >
                                Paytm
                            </Button>
                        </Box>
                        <Box
                            border={"1px solid lightgrey"}
                            bg={"#F7F7F7"}
                            h={"fit-content"}
                            w={"539px"}
                            padding={"22px 20px"}
                        >
                            <Button
                                display="block"
                                onClick={onOpen}
                                fontSize="1rem"
                                ml={"0"}
                                mr={"auto"}
                                fontWeight={"600"}
                                colorScheme="white"
                                borderRadius={"0%"}
                                color={"teal"}
                            >
                                Netbanking
                            </Button>
                        </Box>
                        <Box
                            border={"1px solid lightgrey"}
                            bg={"#F7F7F7"}
                            h={"fit-content"}
                            w={"539px"}
                            padding={"22px 20px"}
                        >
                            <Button
                                display="block"
                                onClick={onOpen}
                                fontSize="1rem"
                                ml={"0"}
                                mr={"auto"}
                                fontWeight={"600"}
                                colorScheme="white"
                                borderRadius={"0%"}
                                color={"teal"}
                            >
                                Wallent
                            </Button>
                        </Box>
                        <Box
                            border={"1px solid lightgrey"}
                            bg={"#F7F7F7"}
                            h={"fit-content"}
                            w={"539px"}
                            padding={"22px 20px"}
                        >
                            <Button
                                display="block"
                                onClick={onOpen}
                                fontSize="1rem"
                                ml={"0"}
                                mr={"auto"}
                                fontWeight={"600"}
                                colorScheme="white"
                                borderRadius={"0%"}
                                color={"teal"}
                            >
                                COD
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    w={"50%"}
                    border={"1px solid lightgray"}
                    borderBottom={"none"}
                    borderLeft={"none"}
                >
                    {/* Payment details goes here.. */}
                </Box>
            </Flex>

            {/* ========================== Card Detail Model ======================== */}

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>ADD CARD DETAILS</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <FormControl>
                                <Box>
                                    <FormLabel>DEBIT/CREADIT CARD</FormLabel>
                                    <Tooltip
                                        hasArrow
                                        label="enter valid card number"
                                        placement="end"
                                        bg="teal"
                                    >
                                        <Input
                                            mt={1}
                                            type={"text"}
                                            isRequired
                                            name="cardnumber"
                                            placeholder="CardNumber*"
                                            maxLength="16"
                                            variant="flushed"
                                            value={formData.cardnumber}
                                            onChange={handleChange}
                                        />
                                    </Tooltip>
                                </Box>

                                <Box display="flex" mt={2}>
                                    <Box>
                                        <Tooltip
                                            hasArrow
                                            label="enter valid month and year"
                                            placement="end"
                                            bg="teal"
                                        >
                                            <Input
                                                mt={5}
                                                type="text"
                                                name="year"
                                                placeholder="Valid (MM/YY)*"
                                                variant="flushed"
                                                maxLength="5"
                                                value={formData.year}
                                                onChange={handleChange}
                                            />
                                        </Tooltip>
                                    </Box>
                                    <Box pl={4}>
                                        <Tooltip
                                            hasArrow
                                            label="enter valid cvv"
                                            placement="end"
                                            bg="teal"
                                        >
                                            <Input
                                                mt={5}
                                                type={"text"}
                                                name="cvv"
                                                placeholder="CVV*"
                                                variant="flushed"
                                                maxLength="3"
                                                onChange={handleChange}
                                                value={formData.cvv}
                                            />
                                        </Tooltip>
                                    </Box>
                                </Box>

                                <Box mt={5}>
                                    <Tooltip
                                        hasArrow
                                        label="enter valid name"
                                        placement="end"
                                        bg="teal"
                                    >
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Name of Card*"
                                            variant="flushed"
                                            onChange={handleChange}
                                            value={formData.name}
                                        />
                                    </Tooltip>
                                    <FormLabel fontSize={"10px"} mt={3}>
                                        We do not store your card details with
                                        us
                                    </FormLabel>
                                </Box>
                            </FormControl>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            width={"full"}
                            backgroundColor={"teal"}
                            color={"white"}
                            mr={3}
                            onClick={(e) => {
                                onClose();
                                e.preventDefault();
                            }}
                        >
                            Continue
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* ========================== Card Details Model ======================== */}

            {/* ========================== Otp Model ======================== */}

            {/* ========================== Otp Model ======================== */}
        </div>
    );
};
