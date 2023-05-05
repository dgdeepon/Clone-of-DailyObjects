import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Product = ({ img, text, heading }) => {
    return (
        <div style={{ width: "220px" }}>
            <Stack textAlign={"left"}>
                <Image src={img} />
                <Text color={"gray.500"} fontSize={"13px"}>
                    {text}
                </Text>
                <Heading as="h4" size={"16px"} fontWeight={"500"}>
                    {heading}
                </Heading>
            </Stack>
        </div>
    );
};
