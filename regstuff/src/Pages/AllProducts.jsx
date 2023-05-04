import { Flex, Box, Text, Image} from "@chakra-ui/react";

const AllProducts = ({
	images,
	title,
	brand,
	price,
	mrp,_id
}) => {
	
	
const mobiles=()=>{

		let payload={
			images: images,
			title: title,
			brand: brand,
			price: price
		}
		fetch("https://dailyobject-clonebe.onrender.com/data/add", {
			method: "POST",
			body: JSON.stringify(payload),
		})
			.then((res) => res.json())
	 }
	return (
		<>
	
		<Box>
			
			<Flex alignItems="center" justifyContent="center">
				<Box
					backgroundColor={"#fafafa"}
					maxW="sm"
					borderWidth="1px"
					rounded="lg"
					shadow="lg"
					position="relative"
				>
					
						<Image
							src="https://icon-library.com/images/wishlist-icon/wishlist-icon-19.jpg"
							size="10px"
							position="absolute"
							top={2}
							right={2}
							w="10%"
						/>
					

					<Image
						src={images}
						alt={`Pic`}
						roundedTop="xl"
                        //while clicking
						// onClick={() => navigate(`/productdetails/${_id}`)}
					/>

					<Box backgroundColor={"white"} p="6">
						<Flex mt="1" justifyContent="space-between" alignContent="center">
							<Box
								fontSize="2xl"
								fontWeight="semibold"
								as="h5"
								lineHeight="tight"
								isTruncated
							></Box>
						</Flex>
						<Text h="80px" fontSize={{md:"10px",lg:"lg"}} textAlign={"center"}>{title}</Text>
						<Flex mt="10px" justifyContent={"space-evenly"}>
							<Text fontSize={{md:"17px",lg:"lg"}} fontWeight={"bold"} >
								Rs.{price}
							</Text>
							<Box color={"gray.800"}>
								<Text fontSize={{md:"17px",lg:"lg"}}
									color={"rgb(164, 161, 161)"}
									fontWeight={"bold"}
									
								>
									<s>{mrp}</s>
								</Text>
                                
							</Box>
                            
						</Flex>
                        <br />
                        <Text color="red" fontSize={{ lg: "md", md: "md", base: "md" }} fontWeight="bold">
                       BUY 1 GET 1 FREE*
                        </Text>
						
					</Box>
				</Box>
			</Flex>
		</Box>
		
		
		</>
	);
};

export default AllProducts;
