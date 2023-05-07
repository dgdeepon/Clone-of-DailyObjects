import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const SubNavContent = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} mt={2}>
            <HStack align={"start"} padding={"2px 12px"} marginBottom={"30px"}>
                {DesktopNavContentItem.map((el) => {
                    return (
                        <Box h={"286px"} w={"196px"}>
                            <Stack
                                spacing={3}
                                textAlign={"left"}
                                fontSize={"12px"}
                                letterSpacing={"0.5px"}
                            >
                                <Box h={"95px"} w={"142px"} margin={"auto"}>
                                    <Image w={"100%"} src={el.img} />
                                </Box>
                                <Box>
                                    <Box w={"85px"} margin={"auto"}>
                                        <Text fontWeight={"bold"}>
                                            {el.category}
                                        </Text>
                                    </Box>
                                    <Box h={1}></Box>
                                    <Box w={"85px"} margin={"auto"}>
                                        <Stack>
                                            {el.brand.map((item) => {
                                                return (
                                                    <Text>
                                                        <Link>{item}</Link>
                                                    </Text>
                                                );
                                            })}
                                        </Stack>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    );
                })}
            </HStack>
        </Box>
    );
};

const DesktopNavContentItem = [
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/phone-cases-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "PHONE CASE",
        brand: ["Apple", "Oneplus", "Samsung", "Xiaomi"],
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/phone-cases-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "PHONE CASE",
        brand: ["Apple", "Oneplus", "Samsung", "Xiaomi"],
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/phone-cases-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "PHONE CASE",
        brand: ["Apple", "Oneplus", "Samsung", "Xiaomi"],
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/phone-cases-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "PHONE CASE",
        brand: ["Apple", "Oneplus", "Samsung", "Xiaomi"],
    },
];
