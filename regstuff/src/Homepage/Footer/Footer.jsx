import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Heading,
    Image,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import "../Landing.css";
import { FiArrowLeft, FiBox, FiCheck, FiInstagram } from "react-icons/fi";
import {
    RiFacebookFill,
    RiPinterestFill,
    RiTwitterFill,
    RiYoutubeFill,
} from "react-icons/ri";

import footimg1 from "./footer-assets/press-desktop.webp";
import footimg2 from "./footer-assets/store-review.webp";
import android from "./footer-assets/android.webp";
import ios from "./footer-assets/IOS.webp";
import amex from "./footer-assets/amex-update.webp";
import maestro from "./footer-assets/maestro-update.webp";
import mastercard from "./footer-assets/mastercard-update.webp";
import mobikwik from "./footer-assets/mobikwik-update.webp";
import paytm from "./footer-assets/paytm-update.webp";
import rupay from "./footer-assets/rupay-update.webp";
import upi from "./footer-assets/upi-update.webp";
import visa from "./footer-assets/visa-update.webp";

const Footer = () => {
    return (
        <div>
            <Divider />
            <Box margin={"50px 2px 20px 2px"}>
                <Heading
                    fontSize={{ lg: "28px", md: "18px", sm: "16px" }}
                    fontFamily={"Fira Sans Extra Condensed"}
                    mb={"30px"}
                >
                    GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE
                    TREATS
                </Heading>
                <Box
                    w={{ lg: "484px", md: "50%", sm: "80%" }}
                    h={"55px"}
                    margin={"auto"}
                >
                    <HStack>
                        <Input
                            borderRadius={"0"}
                            placeholder="Enter your Email"
                            size={{ lg: "lg", md: "md", sm: "sm" }}
                            fontSize={"14px"}
                        />
                        <Button
                            size={{ lg: "lg", md: "md", sm: "sm" }}
                            backgroundColor={"#BFBFBF"}
                            color={"black"}
                            borderRadius={"0"}
                        >
                            <Text
                                fontSize={"16px"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                fontWeight={"600"}
                            >
                                SUBSCRIBE
                            </Text>
                        </Button>
                    </HStack>
                </Box>
            </Box>

            <Heading
                margin={"50px 2px 20px 2px"}
                fontSize={{ lg: "26px", md: "18px", sm: "16px" }}
                fontFamily={"Fira Sans Extra Condensed"}
            >
                FEATURED IN
            </Heading>

            <Box>
                <Image src={footimg1} />
            </Box>
            <Divider />
            <Heading
                margin={"30px 2px 20px"}
                fontSize={{ lg: "26px", md: "18px", sm: "16px" }}
                fontFamily={"Fira Sans Extra Condensed"}
            >
                HONEST REVIEWS. NOTHING ELSE.
            </Heading>
            <Box>
                <Image src={footimg2} />
            </Box>
            <Divider />

            <Box
                padding={{ lg: "40px 250px", md: "40px", sm: "30px 10px" }}
                display={"flex"}
                justifyContent={"space-evenly"}
            >
                <HStack
                    w={{ lg: "148px", base: "120px" }}
                    h={"40px"}
                    justifyContent={"space-between"}
                >
                    <Box
                        w={{ lg: "40px", base: "30px" }}
                        h={{ lg: "40px", base: "30px" }}
                        borderRadius={"50%"}
                        border={"1px solid black"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <FiBox size={20} />
                    </Box>
                    <Text fontSize={"13px"}>Quick Delivery</Text>
                </HStack>
                <HStack
                    w={{ lg: "148px", base: "120px" }}
                    h={"40px"}
                    justifyContent={"space-between"}
                >
                    <Box
                        w={{ lg: "40px", base: "30px" }}
                        h={{ lg: "40px", base: "30px" }}
                        borderRadius={"50%"}
                        border={"1px solid black"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <FiArrowLeft size={20} />
                    </Box>
                    <Text fontSize={"13px"}>Easy Returns</Text>
                </HStack>
                <HStack
                    w={{ lg: "148px", base: "120px" }}
                    h={"40px"}
                    justifyContent={"space-between"}
                >
                    <Box
                        w={{ lg: "40px", base: "30px" }}
                        h={{ lg: "40px", base: "30px" }}
                        borderRadius={"50%"}
                        border={"1px solid black"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <FiCheck size={20} />
                    </Box>
                    <Text fontSize={"13px"}>Quality Assured</Text>
                </HStack>
            </Box>

            <Box
                border={"1px solid lightgrey"}
                display={"flex"}
                flexDirection={{ lg: "row", base: "column" }}
                justifyContent={"space-evenly"}
            >
                {/* Left section */}
                <Box
                    w={{ lg: "70%", base: "90%" }}
                    // h={"72"}
                    display={"flex"}
                    alignItems={"center"}
                    marginLeft={"25px"}
                    // border={"1px solid black"}
                >
                    <HStack w={"100%"}>
                        <Box
                            w={"33.33%"}
                            h={"72"}
                            // border={"1px solid black"}
                            textAlign={{ lg: "left", base: "start" }}
                        >
                            <Heading
                                fontSize={"18px"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                fontWeight={"800"}
                                m={"16px 0 24px 0"}
                            >
                                KNOW US
                            </Heading>
                            <Text fontSize={"13px"} paddingBottom={"15px"}>
                                About DailyObjects
                            </Text>
                            <Text fontSize={"13px"} paddingBottom={"15px"}>
                                Blog
                            </Text>
                        </Box>
                        <Box
                            w={"33.33%"}
                            h={"72"}
                            // border={"1px solid black"}
                            textAlign={"left"}
                        >
                            <Heading
                                fontSize={"18px"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                fontWeight={"800"}
                                m={"16px 0 24px 0"}
                            >
                                HELPDESK
                            </Heading>
                            <Text fontSize={"13px"} paddingBottom={"15px"}>
                                Terms Of Use
                            </Text>
                            <Text fontSize={"13px"} paddingBottom={"15px"}>
                                Warranty Policy
                            </Text>
                            <Text fontSize={"13px"} paddingBottom={"15px"}>
                                Shopping Policy
                            </Text>
                            <Text fontSize={"13px"} paddingBottom={"15px"}>
                                Cancellation Policy
                            </Text>
                        </Box>
                        <Box
                            w={"33.33%"}
                            h={"72"}
                            // border={"1px solid black"}
                            textAlign={"left"}
                        >
                            <Heading
                                fontSize={"18px"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                fontWeight={"800"}
                                m={"16px 0 24px 0"}
                            >
                                NETWORK
                            </Heading>
                            <Text fontSize={"13px"} paddingBottom={"15px"}>
                                Contact Us
                            </Text>
                            <Text fontSize={"13px"} paddingBottom={"15px"}>
                                Corporate Gifting
                            </Text>
                        </Box>
                    </HStack>
                </Box>

                {/* Right section */}
                <Box
                    w={{ lg: "28%", base: "100%" }}
                    display={"flex"}
                    flexDirection={{ lg: "column", base: "row" }}
                    justifyContent={"space-evenly"}
                >
                    <Box
                        padding={"47px 30px 47px 34px"}
                        border={"1px solid lightgrey"}
                        borderRight={"none"}
                        borderTop={{ lg: "none", base: "1px solid ligthgrey" }}
                    >
                        <Stack spacing={3}>
                            <Heading
                                fontSize={"26px"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                textAlign={"left"}
                            >
                                FOLLOW US ON
                            </Heading>
                            <HStack>
                                <Box
                                    w={"36px"}
                                    h={"36px"}
                                    borderRadius={"50%"}
                                    border={"1px solid black"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <FiInstagram size={22} />
                                </Box>
                                <Box
                                    w={"36px"}
                                    h={"36px"}
                                    borderRadius={"50%"}
                                    border={"1px solid black"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <RiFacebookFill size={22} />
                                </Box>
                                <Box
                                    w={"36px"}
                                    h={"36px"}
                                    borderRadius={"50%"}
                                    border={"1px solid black"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <RiYoutubeFill size={22} />
                                </Box>
                                <Box
                                    w={"36px"}
                                    h={"36px"}
                                    borderRadius={"50%"}
                                    border={"1px solid black"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <RiTwitterFill size={22} />
                                </Box>
                                <Box
                                    w={"36px"}
                                    h={"36px"}
                                    borderRadius={"50%"}
                                    border={"1px solid black"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <RiPinterestFill size={22} />
                                </Box>
                            </HStack>
                        </Stack>
                    </Box>
                    <Box
                        padding={"47px 30px 47px 34px"}
                        border={"1px solid lightgrey"}
                        borderRight={"none"}
                        borderTop={{ lg: "none", base: "1px solid ligthgrey" }}
                        borderBottom={"none"}
                    >
                        {/* <Stack spacing={3}>
                            <Heading
                                fontSize={"26px"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                textAlign={"left"}
                            >
                                DOWNLOAD OUR APP
                            </Heading>
                            <HStack>
                                <Box>
                                    <Image src={android} />
                                </Box>
                                <Box>
                                    <Image src={ios} />
                                </Box>
                            </HStack>
                        </Stack> */}
                    </Box>
                </Box>
            </Box>

            {/* <Box
                padding={"20px 2px 40px 2px"}
                borderBottom={"1px solid lightgrey"}
            >
                <Text
                    fontFamily={"Fira Sans Extra Condensed"}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    padding={"18px"}
                >
                    100% SECURE PAYMENT
                </Text>
                <Box w={"fit-content"} margin={"auto"}>
                    <Flex
                        direction={{ lg: "row", md: "row", sm: "column" }}
                        justifyContent={"center"}
                    >
                        <HStack>
                            <Box w={"82px"}>
                                <Image src={amex} />
                            </Box>
                            <Box w={"82px"}>
                                <Image src={maestro} />
                            </Box>
                            <Box w={"82px"}>
                                <Image src={mastercard} />
                            </Box>
                            <Box w={"82px"}>
                                <Image src={mobikwik} />
                            </Box>
                        </HStack>
                        <Box m={1}></Box>
                        <HStack>
                            <Box w={"82px"}>
                                <Image src={paytm} />
                            </Box>
                            <Box w={"82px"}>
                                <Image src={rupay} />
                            </Box>
                            <Box w={"82px"}>
                                <Image src={upi} />
                            </Box>
                            <Box w={"82px"}>
                                <Image src={visa} />
                            </Box>
                        </HStack>
                    </Flex>
                </Box>
            </Box> */}

            <Box
                h={20}
                backgroundColor={"#000000"}
                display={"flex"}
                alignItems={"center"}
            >
                <Text
                    color={"white"}
                    fontSize={"13px"}
                    textAlign={"left"}
                    margin={"0 20px"}
                >
                    © 2012 - 2023 Firki Wholesale Pvt. Ltd.
                </Text>
            </Box>
        </div>
    );
};

export default Footer;
