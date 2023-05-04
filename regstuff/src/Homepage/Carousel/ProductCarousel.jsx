import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "./Product";
import { productData, responsive } from "./ProductData";

const ProductCarousel = () => {
    return (
        <Box w={{ lg: "76%", base: "100%" }}>
            <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {productData.map((ele) => (
                    <Product key={ele.id} {...ele} />
                ))}
            </Carousel>
        </Box>
    );
};

export default ProductCarousel;
