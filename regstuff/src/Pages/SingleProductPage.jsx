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
// import { useState, useEffect } from 'react';

const initState=
  {
    "additional_info": {
        "name1": "DEPENDABLE PROTECTION, UNCOMPROMISED STYLE",
        "details1": "The new shock absorption bumper gives 360 degree protection to the phone using the novel Air Cushion Technology and never fails to make you look stylish by showcasing the actual colour of the phone.",
        "name2": "IT’S ALL IN THE DETAILS",
        "details2": "Slim, lightweight design embodies quick port access, strong grip with superior tactile finish, and a minimal depth for a happy pocket.",
        "name3": "SHOCK POCKET TECHNOLOGY",
        "details3": "Shock pocket technology of the Hybrid Clear Case offers heavy duty protection from falling as it’s tested at 9.8 feet drop safety and comes with extra raised rims.",
        "name4": "FLAUNT YOUR LOVE",
        "details4": "Choice of all our loyal customers, these case covers make you want to flaunt your pick.",
        "name5": "STURDY DESIGN",
        "details5": "Raised edges of the TPU protect the camera and screen to  give your phone the chance of bouncing back from all the falls it may go through. A thick rubber layer with plastic polymer keeps  your phone from cracking.",
        "name6": "CHARGE WITHOUT BOUNDS",
        "details6": "A phone-case that gets along with all Qi-Certified wireless chargers, EarPods and protective screen guards, is all you need."
    },
    "_id": "64502a3c21731bf0729cdf3f",
    "title": "Blue Hybrid Clear Case Cover for iPhone 14",
    "price": 1199,
    "category": "phone case",
    "images": [
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-blue-hybrid-clear-case-cover-for-iphone-14-images/DailyObjects-Blue-Hybrid-Clear-Case-Cover-for-iPhone-14.png?tr=cm-pad_resize,v-2,w-960,h-860,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-blue-hybrid-clear-case-cover-for-iphone-14-images/DailyObjects-Blue-Hybrid-Clear-Case-Cover-for-iPhone-14-1.png?tr=cm-pad_resize,v-2,w-960,h-860,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-blue-hybrid-clear-case-cover-for-iphone-14-images/DailyObjects-Blue-Hybrid-Clear-Case-Cover-for-iPhone-14-2.png?tr=cm-pad_resize,v-2,w-960,h-860,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-blue-hybrid-clear-case-cover-for-iphone-14-images/blue-plain-hybrid-clear-case-iphone-14-3.png?tr=cm-pad_resize,v-2,w-960,h-860,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-blue-hybrid-clear-case-cover-for-iphone-14-images/blue-plain-hybrid-clear-case-iphone-14-4.png?tr=cm-pad_resize,v-2,w-960,h-860,dpr-1",
        "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-blue-hybrid-clear-case-cover-for-iphone-14-images/blue-plain-hybrid-clear-case-iphone-14-5.png?tr=cm-pad_resize,v-2,w-960,h-860,dpr-1"
    ],
    "brand": "iphone14",
    "color": "blue",
    "hex": "#0f2338",
    "mrp": 2199
}

const SingleProductPage = () => {
  const [singledata,setSingledata]=useState([])
const {id}=useParams()
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
console.log(singledata)

  return (
    <>
    <div className={styles.container} >

      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        {/* <img style={{width:"100%"}} 
         src={initState.images[0]} alt="#broken_image" /> */}
         <SingleProductPageCarousel initState={initState} />
      </div>

      <div className={styles.box}>
        <a href="">{singledata.brand}</a>
        <br/>
        <br/>
        <Text fontSize='xl' >{singledata.title}</Text>
        <br/>
       
        <Text fontSize='3xl' as='b' >Rs.{singledata.price}</Text>
        <br/>
        <br/>
        <Center marginLeft="15%" bg='green' h='8%' w="70%" color='white'>
           <a href="" style={{color:"white",textDecorationLine:"none" }}>Add to cart</a>
        </Center>
          <br/>
          <br/>
        <Box  w='100%' p={2} color='red'>
           <Text fontSize='2xl' >EXCITING OFFERS</Text>
        </Box>

        <Box w='100%' p={2} color='black'>
             <p>Buy 1 Get 1 Free</p>
             <p>{typeof singledata!=="undefined"&&singledata.additional_info.name1}</p>
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

    <div className={styles.container} >
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        <Text fontSize='3xl' as='b' >{typeof singledata!=="undefined"&&singledata.additional_info.name1}</Text>
        <p>{typeof singledata!=="undefined"&&singledata.additional_info.details1}</p>
        </div>
      </div>
      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={typeof singledata!=="undefined"&&singledata.images[1]&&singledata.images[1]} alt="" />
      </div>
    </div>


    <div className={styles.container} >
      
      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={typeof singledata!=="undefined"&&singledata.images[2]&&singledata.images[2]} alt="" />
      </div>

      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        <Text fontSize='3xl' as='b' >{typeof singledata!=="undefined"&&singledata.additional_info.name2&&singledata.additional_info.name2}</Text>
        <p>{typeof singledata!=="undefined"&&singledata.additional_info.details2&&singledata.additional_info.details2}</p>
        </div>
      </div>
    </div>


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
    </div>


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
    </div>

    <div className={styles.container} >
      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={initState.images[2]} alt="" />
      </div>
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        
        <Text fontSize='3xl' as='b' >{initState.additional_info.name6}</Text>
        <p>{initState.additional_info.details6}</p>
        </div>
      </div>
    </div>


    <div className={styles.container} >
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        
        <Text fontSize='3xl' as='b' >{initState.additional_info.name1}</Text>
        <p>{initState.additional_info.name1}</p>
        </div>
      </div>

      <div className={styles.box} style={{backgroundColor:"#f7f7f7"}} >
        <img style={{width:"100%",height:"100%"}}
        src={initState.images[0]} alt="" />
      </div>
    </div>
      <br/>
    
    
      <Text fontSize='3xl' as='b' >CUSTOMER REVIEWS</Text>
      <br/>
      <br/>
      <Square w='100%' size='300px'  color='black'>

          <Box  h='100%' w='22%' p={4} color='black'>
          <br/>
          <Text fontSize='xl'  >DailyObjects Stride 2.0 Clear Case Cover For</Text>
          <br/>
              <Center p='3' bg='green' color='white'>
                <a href="" style={{color:"white",textDecorationLine:"none" }}>BE THE FIRDT TO WRITE A REVIEW</a>
              </Center>
          </Box>
      </Square>
      <br/>
    

    </>
   
  )
}

export default SingleProductPage
