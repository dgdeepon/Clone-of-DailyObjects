import { Box, Button, Grid, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import AllProducts from "./AllProducts";
import { useLocation } from "react-router-dom";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";


const Products = () => {
    const location=useLocation()
    const [filters, setfilters] = useState(false);
    const [data, setdata] = useState([]);
    const [cases,setcases]=useState(false)

    useEffect(() => {
        axios
            .get(`https://dailyobject-clonebe.onrender.com/data`)
            .then((res) => setdata(res.data));
    }, []);
    useEffect((x) => {
        if(x==="iphone14"||x==="iphone Pro Max" ||x==="Galaxy M53"||x==="Oneplus 10"){
            setcases(false)
        }else{
          setcases(true)
        }
        axios
		.get(`https://dailyobject-clonebe.onrender.com/data?brand=${x}`)
		.then((res) => setdata(res.data));
                    
    }, []);

    //sorting
    const lowtohigh = () => {
        const num1 = [...data].sort((a, b) => a.price - b.price);
        setdata(num1);
    };

    const hightolow = () => {
        const num2 = [...data].sort((a, b) => b.price - a.price);
        setdata(num2);
    };

    //brand
    const productbrand = (brand) => {
        setdata([]);
        axios
            .get(`https://dailyobject-clonebe.onrender.com/data?brand=${brand}`)
            .then((res) => setdata(res.data));
    };

    //Allproduct show
    const Allproductsshow = () => {
        setdata([]);
        axios
            .get(`https://dailyobject-clonebe.onrender.com/data`)
            .then((res) => setdata(res.data));
    };

    return (
        <>
        <Navbar/>
        <Box mt={20}>
            <Box>
                <Image src="https://images.dailyobjects.com/marche/assets/images/other/offer-baners-updated-homepage-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" />
            </Box>
            <Box>
            <Text
                fontSize={"xl"}
                mt="2%"
                fontWeight="bold"
                textAlign={"center"}>
                MOBILE CASES & COVERS
            </Text>
            <Box w={{lg:"55%",md:"95%"}} display={"flex"} gap="2%" m="auto" mt="3%">
                <Box onClick={Allproductsshow}>
                <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
                        _hover={{transform:"scale(1.15)",}}
						transition={"0.2s ease-in-out"}
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                        All
                    </Text>
                </Box>
                <Box value="iphone14" onClick={() => productbrand("iphone14")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/filter/updated-filter-icons.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
                        _hover={{transform:"scale(1.15)",}}
						transition={"0.2s ease-in-out"}
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                    iphone14
                    </Text>
                </Box>
                <Box  value="iphone14 Pro Max"
                    onClick={() => productbrand("iphone14 Pro Max")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/filter/updated-filter-icons2.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
                        _hover={{transform:"scale(1.15)",}}
						transition={"0.2s ease-in-out"}
                    />
                    <Text textAlign={"center"}>iphone14 Pro Max</Text>
                </Box>
                <Box  value="Galaxy M53"
                    onClick={() => productbrand("Galaxy M53")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/glass-cases.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
                        _hover={{transform:"scale(1.15)",}}
						transition={"0.2s ease-in-out"}
                    />
                    <Text textAlign={"center"}>Samsung</Text>
                </Box>
                <Box  value="Oneplus 10"
                    onClick={() => productbrand("Oneplus 10")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/designer-glass-cases.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
                        _hover={{transform:"scale(1.15)",}}
						transition={"0.2s ease-in-out"}
                    />
                    <Text textAlign={"center"}>Oneplus</Text>
                </Box>
            </Box>
            </Box>
            </Box>
            <Button
                fontSize={"lg"}
                display={"block"}
                ml="auto"
                mr="4%"
                mb="2%"
                colorScheme="teal"
                variant="link"
                onClick={(e) => setfilters(!filters)}>
                Filters
            </Button>
            <Box display={"flex"}>
                <Box>
                    <Grid
                        templateColumns={{lg:filters ? "repeat(3, 1fr)" : "repeat(4, 1fr)",md:filters ? "repeat(2, 1fr)" : "repeat(3, 1fr)",md:filters ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}}
                        gap={7}
                        w="95%"
                        m="auto">
                        {data.map((ele) => (
                            <AllProducts key={ele._id} {...ele} />
                        ))}
                    </Grid>
                </Box>
                {filters && (
                    <Box w={"25%"}>
                        <Box pl="20px">
                            <Button
                                borderRadius={"25px"}
                                colorScheme="teal"
                                backgroundColor="#20A87E"
                                variant="solid"
                                display={"block"}
                                mt="15px"
                                mr="auto">
                                Sort
                            </Button>
                            <Button
                                colorScheme="white"
                                variant="link"
                                display={"block"}
                                mt="20px"
                                mr="auto"
                                onClick={lowtohigh}>
                                Price: Low To High
                            </Button>
                            <Button
                                colorScheme="white"
                                variant="link"
                                display={"block"}
                                mt="20px"
                                mr="auto"
                                onClick={hightolow}>
                                Price: High To Low
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        <Footer/>
        </>
    );
};

export default Products;
