import React from 'react'
import styles from "./Single.module.css"
import { Center, Box   } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react';
import { ArrowForwardIcon  } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react'

import { useState, useEffect } from 'react';

const SingleProductPage = () => {

  useEffect(()=>{
    getData();
  },[])

  const getData=()=>{
    fetch("https://dailyobject-clonebe.onrender.com/data")
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
    })
    .catch(err=>console.log(err.message));
  }


  return (
    <>
    <div className={styles.container} >

      <div className={styles.box} >
        <img style={{width:"100%"}} 
         src="https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-blue-hybrid-clear-case-cover-for-iphone-14-images/DailyObjects-Blue-Hybrid-Clear-Case-Cover-for-iPhone-14.png?tr=cm-pad_resize,v-2,w-745,h-664,dpr-1" alt="#broken_image" />
      </div>

      <div className={styles.box}>
        <a href="">iPhone</a>
        <br/>
        <br/>
        <h2>Stride 2.0 Clear Case Cover For iPhone 14</h2>
       
        <Text fontSize='3xl' as='b' >RS. 1199</Text>
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
             <p>*Free Bi-Fold Wallet on orders above Rs. 1999 / Free Duffle Bag on orders above Rs. 2499</p>
        </Box>
          <hr width="90%"/>
          <br/>

          <div style={{width:'90%', marginLeft:"5%"}} >
            <Flex w='100%' >
                <Box p='4' >
                  <img style={{width:"10%"}} 
                  src="https://images.dailyobjects.com/marche/assets/images/other/gift-box-up.png?tr=cm-pad_resize,v-2" alt="" /> Make it a gift
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
        <Text fontSize='3xl' as='b' >STRIDE CASES</Text>
        <p>Dependable Protection, Uncompromised Style.</p>
        </div>
      </div>
      <div className={styles.box}>
        <img style={{width:"100%",height:"100%"}}
        src="https://images.dailyobjects.com/marche/feature-banner/feature-image-iphone-13-series.jpg?tr=cm-pad_crop,v-2,w-745,h-596,dpr-1" alt="" />
      </div>
    </div>


    <div className={styles.container} >
      
      <div className={styles.box}>
        <img style={{width:"100%",height:"100%"}}
        src="https://images.dailyobjects.com/marche/feature-banner/feature-image-iphone-13-series-1.jpg?tr=cm-pad_crop,v-2,w-745,h-596,dpr-1" alt="" />
      </div>

      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        <Text fontSize='3xl' as='b' >360 DEGREE PROTECTION</Text>
        <p>The all new shock absorption bumper gives 
          360 degree drop protection from 2 metres (6.6ft) 
          height using the novel Air Cushion Technology.</p>
        </div>
      </div>
    </div>


    <div className={styles.container} >
      <div className={styles.box} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>
        
        <Text fontSize='3xl' as='b' >MADE FOR FOREVER</Text>
        <p>The raised bezels offer complete camera protection 
          and 1 mm thickness at the edges cushions it from falling,
           making it safe from all sides.</p>
        </div>
      </div>

      <div className={styles.box}>
        <img style={{width:"100%",height:"100%"}}
        src="https://images.dailyobjects.com/marche/feature-banner/feature-image-iphone-13-series-2.jpg?tr=cm-pad_crop,v-2,w-745,h-596,dpr-1" alt="" />
      </div>
    </div>


    </>
   
  )
}

export default SingleProductPage
