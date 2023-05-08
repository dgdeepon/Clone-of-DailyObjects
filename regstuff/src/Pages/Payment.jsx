import {
    Box,
    Button,
    Divider,
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
    Text,
    Tooltip,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import amex from "../Homepage/Footer/footer-assets/amex-update.webp";
import visa from "../Homepage/Footer/footer-assets/visa-update.webp";
import rupay from "../Homepage/Footer/footer-assets/rupay-update.webp";
import paytm from "../Homepage/Footer/footer-assets/paytm-update.webp";
import upi from "../Homepage/Footer/footer-assets/upi-update.webp";
import Navbar from "../Homepage/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const initialData = {
    cardnumber: "",
    year: "",
    cvv: "",
    name: "",
};

export const Payment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialData);
    const {token}=useSelector((store)=> store.UserLoginReducer);
    const token2=localStorage.getItem('token');

    const [values, setValues] = useState({
        totalQuantity: 0,
        totalPrice: 0,
    });
    function getDetails() {
        axios
            .get(`${process.env.REACT_APP_CARTDATA}`, {
                headers: {
                    Authorization: `Bearer ${token || token2}`,
                },
            })
            .then((res) => {
                console.log(res);
                let totalQ = 0;
                let totalP = 0;
                for (let i = 0; i < res.data.length; i++) {
                    totalQ += res.data[i].quantity;
                    totalP += res.data[i].quantity * res.data[i].price;
                }
                setValues({
                    ...values,
                    totalPrice: totalP,
                    totalQuantity: totalQ,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitPayment = (e) => {
        if (
            formData.cardnumber &&
            formData.cvv &&
            formData.year &&
            formData.name
        ) {
            deleteCart();
            toast({
                position: "top",
                title: `Processing your Order.`,
                status: "loading",
                duration: 3000,
                isClosable: true,
            });
            setTimeout(() => {
                toast({
                    position: "top",
                    title: `Order Successfully Placed.`,
                    status: "success",
                    isClosable: true,
                });
                navigate("/");
            }, 4000);
        }
    };

    const deleteCart = () => {
        axios.delete(process.env.REACT_APP_DELETECART, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
    };

    useEffect(() => {
        getDetails();
    }, []);

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
                    <Box
                        textAlign={"left"}
                        p={"30px"}
                    >
                        <Text as={"b"} fontSize={"xl"}>
                            ORDER SUMMARY
                        </Text>
                        <Flex
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                        >
                            <Text>
                                Item Total ({values.totalQuantity} Item)
                            </Text>
                            <Text as={"b"}>Rs.{values.totalPrice}</Text>
                        </Flex>
                        <Flex
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                        >
                            <Text>Shipping</Text>
                            <Text color={"#eba194"} as={"b"}>
                                FREE
                            </Text>
                        </Flex>
                        <Divider />
                        <Flex
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                        >
                            <Text>Grand Total</Text>
                            <Text as={"b"}>Rs.{values.totalPrice}</Text>
                        </Flex>
                    </Box>
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
                        {formData.cardnumber &&
                        formData.cvv &&
                        formData.year &&
                        formData.name ? (
                            <Button
                                width={"full"}
                                backgroundColor={"teal"}
                                color={"white"}
                                mr={3}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmitPayment();
                                    onClose();
                                }}
                            >
                                Continue
                            </Button>
                        ) : (
                            <Button
                                isDisabled={true}
                                width={"full"}
                                backgroundColor={"teal"}
                                color={"white"}
                                mr={3}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmitPayment();
                                    onClose();
                                }}
                            >
                                Place Order
                            </Button>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* ========================== Card Details Model ======================== */}
        </div>
    );
};
