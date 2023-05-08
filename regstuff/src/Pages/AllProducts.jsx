import { Flex, Box, Text, Image,Button,Spinner,useToast} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
const AllProducts = ({
	images,
	title,
	brand,
	price,
	mrp,_id
}) => {

	const toast = useToast()
	let token=localStorage.getItem("token")
	// console.log(token)
	const [isLoading, setIsLoading] = useState(false);
const navigate=useNavigate()
	const hadleidcheck=(title,images,price)=>{
	
		if(token===null){
			toast({
				title: "Please login first",
				description: "",
				status: "error",
				duration: 2500,
				isClosable: true,
				position: "top",
			});
		   }else{
			   axios.get("https://dailyobject-clonebe.onrender.com/cartData",{
				headers: {
					Authorization: `Bearer ${token}`
				  }
				}).then((res) => {
								
								let datacheck = res.data;
	
								const alreadyAdded = datacheck.filter((el) => el.title === title);
	
								if (alreadyAdded.length >= 1) {
									toast({
										title: "Product Already  Added In Cart",
										description: "",
										status: "error",
										duration: 2500,
										isClosable: true,
										position: "top",
									});
								} else {
									mobiles(title,images,price);
								}
							})
							.catch((err) => console.log(err));
		}
		 }
	
const mobiles=(title,images,price)=>{
// console.log(images[0],price,title)
// price=+(price)
		let payload={
			"title":title,
		
			"price":Number(price),
			"image":images[0],
			"quantity":1

		}
		
		// const {title,price,image,quantity}=payload
		// console.log(title,price,image,quantity)
		// console.log(typeof price)
		axios.post("https://dailyobject-clonebe.onrender.com/cartData/addToCart",{"title":title,price:Number(price),image:images[0],quantity:1}, {
			headers: {
				Authorization: `Bearer ${token}`
			  }
			}).then((res) =>toast({description:"Product is added to cart",position:"top"}))
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
					h={{lg:"573px",md:"400px",sm:"20px"}}

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
						src={images[0]}
						alt={`Pic`}
						roundedTop="xl"
                        //while clicking
						onClick={() => navigate(`/productdetails/${_id}`)}
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
						<Button
								bg="#20a87e"
								color={"white"}
								w="85%"
								m="auto"
								colorScheme="green"
								onClick={()=>hadleidcheck(title,images,price)}
							>
								{!isLoading &&
                                     `ADD TO CART`}
                                {isLoading && (
                                    <Spinner
                                        thickness="2px"
                                        speed="0.50s"
                                        emptyColor="gray.200"
                                        color="black"
                                        size="md"
                                    />
                                )}
								
								<Image
									ml="5%"
									src="https://images.dailyobjects.com/marche/icons/Bag.png?tr=cm-pad_resize,v-2,w-16,h-16,dpr-1"
								/>
							</Button>
					</Box>
				</Box>
			</Flex>
		</Box>
		
		
		</>
	);
};

export default AllProducts;
