import { Box, Button, HStack, Heading, Input } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <div>
            <Box>
                <Heading>
                    GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE
                    TREATS
                </Heading>
                <Box w={"484px"} h={"55px"}>
                    <HStack>
                        <Input
                            borderRadius={"0"}
                            placeholder="Enter your Email"
                            size={"lg"}
                        />
                        <Button size={"lg"} borderRadius={"0"}>
                            SUBSCRIBE
                        </Button>
                    </HStack>
                </Box>
            </Box>
        </div>
    );
};

export default Footer;
