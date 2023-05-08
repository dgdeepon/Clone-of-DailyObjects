import React, { useState } from 'react'
import styles from "./Single.module.css"
import { Center, Box   } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react';
import { ArrowForwardIcon  } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import { Square } from '@chakra-ui/react';
import SingleProductPageCarousel from "./SingleProductPageCarousel";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useToast,Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';
// import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const initialstate={
  additional_info:"",
  "title":"",
  "images":[],
  "brand":"",
  "category":"",
  "mrp":0,
  "price":0,
  "hex":"",
  "color":""
}
const SingleProductPage = () => {
  const [singledata,setSingledata]=useState(initialstate)
const {id}=useParams()
const location=useLocation()
  useEffect(()=>{
    getData(id);
  },[])

  const getData=()=>{
    fetch(`https://dailyobject-clonebe.onrender.com/data/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
     setSingledata(res)
    })
    .catch(err=>console.log(err.message));
  }
// console.log(singledata)
const toast = useToast()
	let token=localStorage.getItem("token")
	// console.log(token)
	const [isLoading, setIsLoading] = useState(false);
const navigate=useNavigate()
	const handleidcheck=(title,images,price)=>{
	
		if(token===null){
			toast({
				title: "Please login first",
				description: "",
				status: "error",
				duration: 2500,
				isClosable: true,
				position: "top",
			})
      navigate("/userlogin")   
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
console.log(title,images,price)
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
			}).then((res) =>
      
      {toast({description:"Product is added to cart",position:"top"})
    
      navigate("/cart")
    
    }
     
      
      )
	 }





  return (
    <>
    <Navbar/>
    <div className={styles.container} >

      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        {/* <img style={{width:"100%"}} 
         src={initState.images[0]} alt="#broken_image" /> */}
         <SingleProductPageCarousel initState={typeof singledata!==undefined&&singledata} />
      </div>

      <div className={styles.box}>
        <a href="">{typeof singledata!=="undefined"&&singledata.brand}</a>
        <br/>
        <br/>
        <Text fontSize='xl' >{typeof singledata!=="undefined"&&singledata.title}</Text>
        <br/>
       
        <Text fontSize='3xl' as='b' >Rs.{typeof singledata!=="undefined"&&singledata.price}</Text>
        <br/>
        <br/>
        <Center _hover={{cursor:"pointer"}} onClick={()=>handleidcheck(singledata.title,singledata.images,singledata.price)} marginLeft="15%" bg='green' h='8%' w="70%" color='white'>
         Add to cart
        </Center>
          <br/>
          <br/>
        <Box  w='100%' p={2} color='red'>
           <Text fontSize='2xl' >EXCITING OFFERS</Text>
        </Box>

        <Box w='100%' p={2} color='black'>
             <p>Buy 1 Get 1 Free</p>
             <p>{(typeof singledata!=="undefined"&&singledata.additional_info.name1)&&singledata.additional_info.name1}</p>
        </Box>
          <hr width="90%"/>
          <br/>

          <div style={{width:'90%', marginLeft:"5%"}} >
            <Flex w='100%' >
                <Box p='4' >
                  Make it a gift
                </Box>

                  <Spacer />

                <Box p='4' >
                    <a href="">Learn More</a>
                </Box>
            </Flex>
          </div>
            <br/>

            
          <div style={{width:'90%', marginLeft:"5%"}} >
          <Flex>
              <Box p='4'>
                Product Details
              </Box>
                <Spacer />
                <Box p='4' >
              <ArrowForwardIcon/>
              </Box>
          </Flex>
          <hr/>

          <Flex>
              <Box p='4' >
                Specifications
              </Box>
                <Spacer />
                <Box p='4' >
                <ArrowForwardIcon/>
              </Box>
          </Flex>
          <hr/>

          <Flex>
              <Box p='4' >
                Delivery Time & Returns
              </Box>
                <Spacer />
                <Box p='4' >
                <ArrowForwardIcon/>
              </Box>
          </Flex>
          <hr/>

          </div>

      </div>
    </div>
    {typeof singledata!=="undefined"&&singledata.images[1]&&
    <div className={styles.container} >
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        <Text fontSize='3xl' as='b' >{typeof singledata!=="undefined"&&singledata.additional_info.name1&&singledata.additional_info.name1}</Text>
        <p>{typeof singledata!=="undefined"&&singledata.additional_info.details1&&singledata.additional_info.details1}</p>
        </div>
      </div>
      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={(typeof singledata!=="undefined"&&singledata.images[1])&&singledata.images[1]} alt="" />
      </div>
    </div>}

    {typeof singledata!=="undefined"&&singledata.images[2]&&
    <div className={styles.container} >
      
      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={(typeof singledata!=="undefined"&&singledata.images[2])&&singledata.images[2]} alt="" />
      </div>

      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        <Text fontSize='3xl' as='b' >{(typeof singledata!=="undefined"&&singledata.additional_info.name2)&&singledata.additional_info.name2}</Text>
        <p>{(typeof singledata!=="undefined"&&singledata.additional_info.details2)&&singledata.additional_info.details2}</p>
        </div>
      </div>
    </div>}

    {typeof singledata!=="undefined"&&singledata.images[3]&&
    <div className={styles.container} >
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        
        <Text fontSize='3xl' as='b' >{typeof singledata!=="undefined"&&singledata.additional_info.name3&&singledata.additional_info.name3}</Text>
        <p>{typeof singledata!=="undefined"&&singledata.additional_info.details3&&singledata.additional_info.details3}</p>
        </div>
      </div>

      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={typeof singledata!=="undefined"&&singledata.images[3]&&singledata.images[3]} alt="" />
      </div>
    </div>}

    {typeof singledata!=="undefined"&&singledata.images[4]&&
    <div className={styles.container} >
      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={typeof singledata!=="undefined"&&singledata.images[4]&&singledata.images[4]} alt="" />
      </div>
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        
        <Text fontSize='3xl' as='b' >{typeof singledata!=="undefined"&&singledata.additional_info.name4&&singledata.additional_info.name4}</Text>
        <p>{typeof singledata!=="undefined"&&singledata.additional_info.details4&&singledata.additional_info.details4}</p>
        </div>
      </div>
    </div>
}
    
    {typeof singledata!=="undefined"&&singledata.images[5]&&
    <div className={styles.container} >
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        
        <Text fontSize='3xl' as='b' >{typeof singledata!=="undefined"&&singledata.additional_info.name5&&singledata.additional_info.name5}</Text>
        <p>{typeof singledata!=="undefined"&&singledata.additional_info.details5&&singledata.additional_info.details5}</p>
        </div>
      </div>

      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={typeof singledata!=="undefined"&&singledata.images[5]&&singledata.images[5]} alt="" />
      </div>
    </div>}
    {typeof singledata!=="undefined"&&singledata.images[2]&&
    <div className={styles.container} >
      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={typeof singledata!=="undefined"&&singledata.images[2]&&singledata.images[2]} alt="" />
      </div>
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        
        <Text fontSize='3xl' as='b' >{typeof singledata!=="undefined"&&singledata.additional_info.name6&&singledata.additional_info.name6}</Text>
        <p>{typeof singledata!=="undefined"&&singledata.additional_info.details6&&singledata.additional_info.details6}</p>
        </div>
      </div>
    </div>}

{typeof singledata!=="undefined"&&singledata.images[0]&&
    <div className={styles.container} >
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        
        <Text fontSize='3xl' as='b' >{typeof singledata!=="undefined"&&singledata.additional_info.name1&&singledata.additional_info.name1}</Text>
        <p>{typeof singledata!=="undefined"&&singledata.additional_info.name1&&singledata.additional_info.name1}</p>
        </div>
      </div>

      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={typeof singledata!=="undefined"&&singledata.images[0]&&singledata.images[0]} alt="No Image For This" />
      </div>
    </div>}
      <br/>
    
    
      
 
    
<Footer/>
    </>
   
  )
}

export default SingleProductPage
