import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    HStack,
    Image, 
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import {
    IoBagOutline,
    IoPersonOutline,
    IoSearchOutline,
} from "react-icons/io5";
import "../Landing.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    const bagTotal = 0;

    return (
        <Box>
            <Flex
                bg={useColorModeValue("white", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
            >
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{
                        base: "center",
                        md: "start",
                        lg: "space-between",
                    }}
                    alignItems={"center"}
                    // border={"1px solid red"}
                    margin={{ lg: "0 25px", base: "0 5px" }}
                    padding={"5px"}
                >
                    <Box
                        textAlign={useBreakpointValue({
                            base: "center",
                            md: "left",
                        })}
                    >
                        <Link to="/">
                            <Image
                                src="Logo"
                                w={{ lg: "240px", base: "100%" }}
                            />
                        </Link>
                    </Box>

                    <Box w={"100%"}>
                        <Flex display={{ base: "none", md: "flex" }}>
                            <Box margin={"auto"}>
                                <DesktopNav />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={"flex-end"}
                    direction={"row"}
                    spacing={{ lg: 4, base: 1 }}
                >
                    {/* Nav right icon section */}
                    <Button
                        as={"a"}
                        fontSize={"sm"}
                        fontWeight={400}
                        variant={"link"}
                        href={"#"}
                    >
                        <IoBagOutline size={20} color="black" />
                        <span
                            style={{
                                marginTop: "-30px",
                                marginLeft: "-5px",
                                display: "float",
                            }}
                        >
                            {bagTotal}
                        </span>
                    </Button>
                    <Button
                        as={"a"}
                        fontSize={"sm"}
                        fontWeight={400}
                        variant={"link"}
                        href={"#"}
                    >
                        <IoPersonOutline size={20} color="black" />
                    </Button>
                    <Button
                        as={"a"}
                        fontSize={"sm"}
                        fontWeight={400}
                        variant={"link"}
                        href={"#"}
                    >
                        <IoSearchOutline size={20} color="black" />
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue("black");
    // const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {/* {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.brand}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Link
                                className="Desktopnav-fonts"
                                p={2}
                                href={navItem.href ?? "#"}
                                fontSize={"md"}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: "none",
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))} */}
            <Flex gap={"20px"}>
                {/* Tech section */}
                {NavBarItems.map((sections) => {
                    return (
                        <Popover trigger={"hover"} placement={"bottom-start"}>
                            <PopoverTrigger>
                                <Link
                                    p={2}
                                    to={"/products-men"} //---------> add product section link here
                                    fontSize={"16px"}
                                    fontWeight={500}
                                    color={linkColor}
                                >
                                    <Text
                                        fontSize={"16px"}
                                        fontFamily={"Fira Sans Extra Condensed"}
                                        fontWeight={600}
                                        color={"black"}
                                        _hover={{
                                            color: "teal",
                                        }}
                                    >
                                        {sections}
                                    </Text>
                                </Link>
                            </PopoverTrigger>

                            <PopoverContent
                                borderTop={0}
                                boxShadow={"md"}
                                bg={popoverContentBgColor}
                                borderRadius={0}
                                p={5}
                                minW={"sm"}
                                w={"100vw"}
                                // border={"1px solid black"}
                            >
                                <SubNavContent />
                            </PopoverContent>
                        </Popover>
                    );
                })}
            </Flex>
        </Stack>
    );
};

const SubNavContent = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} mt={2}>
            <HStack
                align={"start"}
                padding={"2px 12px"}
                marginBottom={"30px"}
                w={"100%"}
            >
                {DesktopNavContentItem.map((el) => {
                    return (
                        <Box h={"230px"} w={"196px"}>
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
                                    <Box w={"fit-content"} margin={"auto"}>
                                        <Text fontWeight={"bold"} mb={2} mt={2}>
                                            {el.category}
                                        </Text>
                                        <Stack>
                                            <Link to={el.href}>
                                                {el.brand.map((item) => {
                                                    return (
                                                        <Text
                                                            _hover={{
                                                                textDecoration:
                                                                    "underline",
                                                            }}
                                                            mb={1}
                                                        >
                                                            {item}
                                                        </Text>
                                                    );
                                                })}
                                            </Link>
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

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"pink.400"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: "0!important" }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: "TECH",
        children: [
            {
                label: "Apple",
                href: "#",
            },
            {
                label: "Oneplus",
                href: "#",
            },
            {
                label: "Samsumg",
                href: "#",
            },
            {
                label: "Xiaomi",
                href: "#",
            },
        ],
    },
    {
        label: "BAGS & WALLETS",
        children: [
            {
                label: "Job Board",
                subLabel: "Find your dream design job",
                href: "#",
            },
            {
                label: "Freelance Projects",
                subLabel: "An exclusive list for contract work",
                href: "#",
            },
        ],
    },
    {
        label: "WORKS ESSENTIALS",
        href: "#",
    },
    {
        label: "GIFTING",
        href: "#",
    },
    {
        label: "COLLECTIONS",
        href: "#",
    },
    {
        label: "SHOP BY APPLE",
        href: "#",
    },
    {
        label: "NEW ARRIVALS",
        href: "#",
    },
];

const DesktopNavContentItem = [
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/phone-cases-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "PHONE CASE",
        brand: ["Apple", "Oneplus", "Samsung", "Xiaomi"],
        href: "https://www.apple.com/",
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeves-and-bags-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "LAPTOP SLEEVES AND BAGS",
        brand: [
            "Zippered sleeves",
            "Macbook hardcases",
            "Messenger Bags",
            "Backpacks",
        ],
        href: "#",
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/chargig-solutions.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "CHARGING SOLUTIONS",
        brand: [
            "Wireless Chargers",
            "Chargers and Cables",
            "Apples Watch Charges",
            "Charging Stations",
        ],
        href: "#",
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/watch-accessories-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "Watch Accessories",
        brand: [
            "Apple Watchbands",
            "Apples Watch Chargers",
            "Universal Watchbands",
            "Apple Watch Cases",
        ],
        href: "#",
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/stands-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "STANDS",
        brand: ["Mobile", "Laptop", "Apple Watch", "iPad"],
        href: "#",
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/organsiers-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "ORGANISERS",
        brand: ["Tech Kit", "Folio", "Cables", "Pouches"],
        href: "#",
    },
    {
        img: "https://images.dailyobjects.com/marche/assets/images/other/other-accessories-s.png?tr=cm-pad_resize,v-2,dpr-1",
        category: "OTHER ACCESORIES",
        brand: ["Screen Guards", "AirPod Cases", "iPad Cases", "AirTag Cases"],
        href: "#",
    },
];

const NavBarItems = [
    "TECH",
    "BAG & WALLETS",
    "WORK ESSENTIALS",
    "GIFTING",
    "COLLECTIONS",
    "SHOP BY APPLE",
    "NEW ARRIVALS",
];

const NavData = [
    {
        heading: "TECH",
        NavContentItem : [
            {
                img: "https://images.dailyobjects.com/marche/assets/images/other/phone-cases-s.png?tr=cm-pad_resize,v-2,dpr-1",
                category: "PHONE CASE",
                brand: ["Apple", "Oneplus", "Samsung", "Xiaomi"],
                href: "https://www.apple.com/",
            },
            {
                img: "https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeves-and-bags-s.png?tr=cm-pad_resize,v-2,dpr-1",
                category: "LAPTOP SLEEVES AND BAGS",
                brand: [
                    "Zippered sleeves",
                    "Macbook hardcases",
                    "Messenger Bags",
                    "Backpacks",
                ],
                href: "#",
            },
            {
                img: "https://images.dailyobjects.com/marche/assets/images/other/chargig-solutions.png?tr=cm-pad_resize,v-2,dpr-1",
                category: "CHARGING SOLUTIONS",
                brand: [
                    "Wireless Chargers",
                    "Chargers and Cables",
                    "Apples Watch Charges",
                    "Charging Stations",
                ],
                href: "#",
            },
            {
                img: "https://images.dailyobjects.com/marche/assets/images/other/watch-accessories-s.png?tr=cm-pad_resize,v-2,dpr-1",
                category: "Watch Accessories",
                brand: [
                    "Apple Watchbands",
                    "Apples Watch Chargers",
                    "Universal Watchbands",
                    "Apple Watch Cases",
                ],
                href: "#",
            },
            {
                img: "https://images.dailyobjects.com/marche/assets/images/other/stands-s.png?tr=cm-pad_resize,v-2,dpr-1",
                category: "STANDS",
                brand: ["Mobile", "Laptop", "Apple Watch", "iPad"],
                href: "#",
            },
            {
                img: "https://images.dailyobjects.com/marche/assets/images/other/organsiers-s.png?tr=cm-pad_resize,v-2,dpr-1",
                category: "ORGANISERS",
                brand: ["Tech Kit", "Folio", "Cables", "Pouches"],
                href: "#",
            },
            {
                img: "https://images.dailyobjects.com/marche/assets/images/other/other-accessories-s.png?tr=cm-pad_resize,v-2,dpr-1",
                category: "OTHER ACCESORIES",
                brand: ["Screen Guards", "AirPod Cases", "iPad Cases", "AirTag Cases"],
                href: "#",
            },
        ]
    },
];

// const DesktopNavItems = [
//     {
//         img: "",
//         category: "PHONE CASE",
//         brand: ["Apple", "Samsung", "OnePlus", "Xiaomi"],
//         href: "#",
//     },
//     {
//         img: "",
//         category: "PHONE CASE",
//         brand: ["Apple", "Samsung", "OnePlus", "Xiaomi"],
//         href: "#",
//     },
//     {
//         img: "",
//         category: "PHONE CASE",
//         brand: ["Apple", "Samsung", "OnePlus", "Xiaomi"],
//         href: "#",
//     },
//     {
//         img: "",
//         category: "PHONE CASE",
//         brand: ["Apple", "Samsung", "OnePlus", "Xiaomi"],
//         href: "#",
//     },
// ];
