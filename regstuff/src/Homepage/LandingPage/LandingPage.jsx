import {
    Box,
    Button,
    Flex,
    Grid,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import offerBannar from "../Assets/bannars/offer_bannar.webp";
import bannar1 from "../Assets/bannars/bannar1.webp";
import bannar2 from "../Assets/bannars/bannar2.webp";
import bannar3 from "../Assets/bannars/bannar3.webp";
import bannar4 from "../Assets/bannars/bannar4.webp";
import bannar5 from "../Assets/bannars/bannar5.webp";
import bannar6 from "../Assets/bannars/bannar6.webp";
import bannar7 from "../Assets/bannars/bannar7.webp";
import prod_gif from "../Assets/bannars/prod_video1.gif";
import ProductCarousel from "../Carousel/ProductCarousel";

const LandingPage = () => {
    return (
        <div>
            <Box>
                <Image src={offerBannar} />
            </Box>

            <Box>
                <Image src={bannar1} />
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box>
                <Image src={bannar2} />
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box
                w={{ lg: "89%", base: "95%" }}
                margin={"auto"}
                display={"flex"}
                flexDirection={{ lg: "row", base: "column" }}
            >
                <Box
                    // border={"1px solid black"}
                    w={{ lg: "24%" }}
                    textAlign={"left"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    gap={1}
                >
                    <Heading
                        fontSize={{ lg: "26px", base: "md" }}
                        fontWeight={"700"}
                        fontFamily={"Fira Sans Extra Condensed"}
                        letterSpacing={2}
                    >
                        NEW ARRIVALS
                    </Heading>
                    <Text fontSize={{ lg: "16px", base: "12px" }}>
                        Check out our newest launches.
                    </Text>
                    <Button
                        borderRadius={0}
                        w={"225px"}
                        bgColor={"black"}
                        fontSize={"13px"}
                        color={"white"}
                        _hover={"none"}
                    >
                        Shop New Arrivals
                    </Button>
                </Box>

                <ProductCarousel />
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box>
                <Image src={bannar3} />
            </Box>
            <Box h={{ lg: 14, base: 8 }}></Box>
            <Box>
                <Image src={bannar4} />
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box
                w={{ lg: "89%", base: "95%" }}
                margin={"auto"}
                display={"flex"}
                flexDirection={{ lg: "row", base: "column" }}
            >
                <Box
                    // border={"1px solid black"}
                    w={{ lg: "24%" }}
                    textAlign={"left"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    gap={1}
                >
                    <Heading
                        fontSize={{ lg: "26px", base: "md" }}
                        fontWeight={"700"}
                        fontFamily={"Fira Sans Extra Condensed"}
                        letterSpacing={2}
                    >
                        SHOP CATEGORIES
                    </Heading>
                    <Text fontSize={{ lg: "16px", base: "12px" }}>
                        Now browse our selection of carefully curated products
                        in sorted categories.
                    </Text>
                    <Button
                        borderRadius={0}
                        w={"225px"}
                        bgColor={"black"}
                        fontSize={"13px"}
                        color={"white"}
                        _hover={"none"}
                    >
                        Shop New Arrivals
                    </Button>
                </Box>

                <ProductCarousel />
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box>
                <Image src={bannar5} />
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box w={{ lg: "95%" }} margin={"auto"}>
                <Heading
                    fontSize={{ lg: "26px", base: "md" }}
                    fontWeight={"700"}
                    fontFamily={"Fira Sans Extra Condensed"}
                    letterSpacing={2}
                    textAlign={"left"}
                >
                    COLLECTIONS
                </Heading>
                <Grid templateColumns={"repeat(3, 1fr)"} gap={4} mt={5}>
                    <Box w={{ lg: "450px" }} h={{ lg: "653px" }}>
                        <Stack spacing={2}>
                            <Image src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                            <Heading
                                fontSize={"18px"}
                                fontWeight={"700"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                letterSpacing={1}
                                textAlign={"left"}
                            >
                                08:01 COLLECTION
                            </Heading>
                            <Text
                                textAlign={"left"}
                                fontSize={"14px"}
                                lineHeight={1.2}
                            >
                                A collection featured to preserve all brief
                                encounters on your everyday journey.
                            </Text>
                            <Text
                                fontSize={"14px"}
                                textAlign={"left"}
                                textDecoration={"underline"}
                            >
                                <Link>Shop Now</Link>
                            </Text>
                        </Stack>
                    </Box>
                    <Box w={{ lg: "450px" }} h={{ lg: "653px" }}>
                        <Stack spacing={2}>
                            <Image src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                            <Heading
                                fontSize={"18px"}
                                fontWeight={"700"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                letterSpacing={1}
                                textAlign={"left"}
                            >
                                TARP COLLECTION
                            </Heading>
                            <Text
                                textAlign={"left"}
                                fontSize={"14px"}
                                lineHeight={1.2}
                            >
                                Urban-inspired carriers, made for free-spirited
                                and powerful wearers.
                            </Text>
                            <Text
                                fontSize={"14px"}
                                textAlign={"left"}
                                textDecoration={"underline"}
                            >
                                <Link>Shop Now</Link>
                            </Text>
                        </Stack>
                    </Box>
                    <Box w={{ lg: "450px" }} h={{ lg: "653px" }}>
                        <Stack spacing={2}>
                            <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/collections-Platform-collection-banner-image-homepgae.png?tr=cm-pad_resize,v-2,dpr-1" />
                            <Heading
                                fontSize={"18px"}
                                fontWeight={"700"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                letterSpacing={1}
                                textAlign={"left"}
                            >
                                PLATFORM COLLECTION
                            </Heading>
                            <Text
                                textAlign={"left"}
                                fontSize={"14px"}
                                lineHeight={1.2}
                            >
                                Designed with minimal geometric innovations to
                                add comfort to your workspace.
                            </Text>
                            <Text
                                fontSize={"14px"}
                                textAlign={"left"}
                                textDecoration={"underline"}
                            >
                                <Link>Shop Now</Link>
                            </Text>
                        </Stack>
                    </Box>
                </Grid>
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box>
                <Image src={bannar6} />
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box>
                <Image src={prod_gif} />
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box w={{ lg: "95%" }} margin={"auto"}>
                <Heading
                    fontSize={{ lg: "26px", base: "md" }}
                    fontWeight={"700"}
                    fontFamily={"Fira Sans Extra Condensed"}
                    letterSpacing={2}
                    textAlign={"left"}
                >
                    FEATURED COLLECTIONS
                </Heading>
                <Grid templateColumns={"repeat(3, 1fr)"} gap={4} mt={5}>
                    <Box w={{ lg: "450px" }} h={{ lg: "653px" }}>
                        <Stack spacing={2}>
                            <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/paws_and_claws_revised-01.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                            <Heading
                                fontSize={"18px"}
                                fontWeight={"700"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                letterSpacing={1}
                                textAlign={"left"}
                            >
                                PAWS & CLAWS
                            </Heading>
                            <Text
                                textAlign={"left"}
                                fontSize={"14px"}
                                lineHeight={1.2}
                            >
                                Quirky pet puns via bold shapes and symmetry, on
                                the back of your phone!
                            </Text>
                            <Text
                                fontSize={"14px"}
                                textAlign={"left"}
                                textDecoration={"underline"}
                            >
                                <Link>Shop Now</Link>
                            </Text>
                        </Stack>
                    </Box>
                    <Box w={{ lg: "450px" }} h={{ lg: "653px" }}>
                        <Stack spacing={2}>
                            <Image src="https://images.dailyobjects.com/marche/assets/images/other/tetro-play-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                            <Heading
                                fontSize={"18px"}
                                fontWeight={"700"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                letterSpacing={1}
                                textAlign={"left"}
                            >
                                RETRO PLAY COLLECTION
                            </Heading>
                            <Text
                                textAlign={"left"}
                                fontSize={"14px"}
                                lineHeight={1.2}
                            >
                                A collection that teleports you back to the
                                bygone days of vintage video games.
                            </Text>
                            <Text
                                fontSize={"14px"}
                                textAlign={"left"}
                                textDecoration={"underline"}
                            >
                                <Link>Shop Now</Link>
                            </Text>
                        </Stack>
                    </Box>
                    <Box w={{ lg: "450px" }} h={{ lg: "653px" }}>
                        <Stack spacing={2}>
                            <Image src="https://images.dailyobjects.com/marche/assets/images/other/skater-subculture-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                            <Heading
                                fontSize={"18px"}
                                fontWeight={"700"}
                                fontFamily={"Fira Sans Extra Condensed"}
                                letterSpacing={1}
                                textAlign={"left"}
                            >
                                SKATEBOARD SUBCULTURE
                            </Heading>
                            <Text
                                textAlign={"left"}
                                fontSize={"14px"}
                                lineHeight={1.2}
                            >
                                Skate to your own beat with a case collection
                                that celebrates counterculture.
                            </Text>
                            <Text
                                fontSize={"14px"}
                                textAlign={"left"}
                                textDecoration={"underline"}
                            >
                                <Link>Shop Now</Link>
                            </Text>
                        </Stack>
                    </Box>
                </Grid>
            </Box>

            <Box h={{ lg: 14, base: 8 }}></Box>

            <Box>
                <Image src={bannar7} />
            </Box>
            <Box
                display={"flex"}
                flexDirection={{ lg: "row", base: "column" }}
                justifyContent={"space-evenly"}
                padding={"80px 35px"}
            >
                <Box
                    w={{ lg: "40%", base: "100%" }}
                    // border={"1px solid black"}
                    textAlign={"left"}
                    display={"flex"}
                >
                    <Stack spacing={3} mb={{ base: "15px" }}>
                        <Box>
                            <Heading
                                fontSize={"50px"}
                                fontWeight={"600"}
                                fontFamily={"Fira Sans Extra Condensed"}
                            >
                                OUR STORY
                            </Heading>
                        </Box>
                        <Box>
                            <Text fontSize={"18px"} color={"blackAlpha.900"}>
                                Founded in 2012, DailyObjects is a
                                design-obsessed lifestyle accessories brand
                                committed to making your everyday carry
                                #lessordinary.
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize={"18px"} color={"blackAlpha.900"}>
                                You can look forward to a carefully-crafted
                                range of products, made from long-lasting
                                materials, with designs that stand out and make
                                your life easy. With DailyObjects, let your
                                lifestyle reflect your sensibilities as you go
                                on to make your every day #lessordinary.
                            </Text>
                        </Box>
                        <Box>
                            <Text textDecoration={"underline"}>
                                <Link>Read more</Link>
                            </Text>
                        </Box>
                    </Stack>
                </Box>

                <Box w={{ lg: "40%", base: "100%" }}>
                    <Image src="https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                </Box>
            </Box>
        </div>
    );
};

export default LandingPage;
