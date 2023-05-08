import React, { useState, useEffect } from 'react'
import styles from "./CartPage.module.css";
import { Text } from '@chakra-ui/react';
import { Center  } from '@chakra-ui/react'
import CartComponent from "../components/CartComponent"
import CartCard from '../components/CartCard';
import {  ChevronDownIcon  } from '@chakra-ui/icons';



const CartPage = () => {
    const [data, setData]=useState([]);
    

    useEffect(()=>{
      getData();
    },[])

    const getData=()=>{
        fetch("https://dailyobject-clonebe.onrender.com/cartData",{
            method:"GET",
            headers:{
                "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDU3NDZhYTA1NjdiMGEyZmU1M2ExZTUiLCJpYXQiOjE2ODM0ODU5NTZ9.lUu7l5ghCQaQ2ZsWt7toVjIQNi_LUm-kyprB_LH4Ixo",
                "Content-type":"application/json()"
            }
        }).then((res)=>res.json()).then((res)=>{
          console.log(res);
          return setData(res);
        })
        .catch((err)=>console.log(err.message));
    }

    if(data.length===0){
      return <CartComponent/>
    }

  return (
    <>
       <br/>
    <div style={{width:"99%",height:"100px"}} >
        <img src="https://images.dailyobjects.com/marche/assets/images/other/offer-baners-updated-homepage-desktop.jpg?tr=cm-pad_crop,v-2,w-1490,dpr-1" alt="" />
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <Text fontSize='4xl' as='b' >SHOPPING BAG</Text>
    <br/>
    <br/>

    <hr/>

    <div className={styles.container} >
            <div className={styles.boxScroll}>
            {data.map((el)=>{
              return <CartCard test={el} />
            })}
            </div>

            <div className={styles.boxScroll} >

              <div className={styles.containerChildTwo}>

                  <div className={styles.boxTypeOne} >
                      <div> <Text fontSize='md' as='b' >MAKE IT A GIFT FOR INR 500</Text> </div>
                      <div ><Text fontSize='md' as='b' >ADD+</Text></div>
                  </div>

                  <div className={styles.boxTypeTwo} >
                      <div> <Text fontSize='md' as='b' >COUPONS & OFFERS</Text></div>
                      <div ><Text fontSize='2xl' as='b' ><ChevronDownIcon/></Text></div>
                  </div>

                  <div className={styles.boxTypeThree} >
                      <div> <Text fontSize='md' as='b' >REDEEM GIFT CARD</Text></div>
                      <div ><Text fontSize='2xl' as='b' ><ChevronDownIcon/></Text></div>
                  </div>

                  <div className={styles.boxTypeFour} >

                          <div className={styles.boxTypeThree} >
                              <Text fontSize='xl' as='b' >ORDER SUMMARY</Text>
                            <div></div>
                          </div>

                          <div className={styles.boxTypeThree} >
                              <div> <Text fontSize='md' as='b' >Item Total (1 Item)</Text></div>
                              <div ><Text fontSize='2xl' as='b' >Rs. 1</Text></div>
                          </div>

                      
                          <div className={styles.boxTypeThree} >
                              <div> <Text fontSize='md' as='b' >Shipping</Text></div>
                              <div ><Text fontSize='xl' as='b' color='red' >FREE</Text></div>
                          </div>
                          <hr/>

                          <div className={styles.boxTypeThree} >
                              <div> <Text fontSize='md' as='b' >Grand Total</Text></div>
                              <div ><Text fontSize='xl' as='b'  >Rs.1199</Text></div>
                          </div>
                            <br/>
                          <Center  bg='#20a87e' h='50px' w="100%" color='white'>
                            <a href="" style={{color:"white",textDecorationLine:"none" }}>CHECKOUT</a>
                          </Center>
                  </div>
                        
                        
              </div>  
            </div>
      </div>
    </>
  )
}

export default CartPage