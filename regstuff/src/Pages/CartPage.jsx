import React, { useState, useEffect } from 'react'
import styles from "./CartPage.module.css";
import { Text } from '@chakra-ui/react';
import { Center  } from '@chakra-ui/react'
import CartComponent from "../components/CartComponent"
import CartCard from '../components/CartCard';
import {  ChevronDownIcon  } from '@chakra-ui/icons';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const CartPage = () => {
    const [data, setData]=useState([]);

    const [deleteitem,setDeleteItem]=useState(false)
    const toast=useToast()
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const [count, setCount]=useState(0);
    const handleClick=(id,quantity,val)=>{
       if(quantity>=0){
        quantity=quantity+val
        setCount(quantity)
        // console.log(id)
        // console.log(typeof quantity,quantity)
        const token=localStorage.getItem("token")
        axios.patch(`https://dailyobject-clonebe.onrender.com/cartData/cartEdit/${id}`,{"quantity":quantity},{
            headers: {
                Authorization: `Bearer ${token}`
              }
            }).then((res) => {
          getData()
            })
        }}
   
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const handleDelete=(id)=>{

  const token=localStorage.getItem("token")
        axios.delete(`https://dailyobject-clonebe.onrender.com/cartData/cartDelete/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
              }
            }).then((res) => {
      toast({"description":res.data.success,position:"top"})
      getData()
            })
}
    useEffect(()=>{
      getData();
    },[])
const token=localStorage.getItem("token")
    const getData=()=>{
        fetch("https://dailyobject-clonebe.onrender.com/cartData",{
            method:"GET",
            headers:{
                "Authorization":`bearer ${token}`,
                "Content-type":"application/json()"
            }
        }).then((res)=>res.json()).then((res)=>{
          // console.log(res);
          return setData(res);
        })
        .catch((err)=>console.log(err.message));
    }
let sum=0
for(let i=0;i<data.length;i++){
  sum=sum+(data[i].quantity*(Number(data[i].price)))
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
              return <CartCard test={el} handleClick={handleClick} handleDelete={handleDelete} />
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
                              <div> <Text fontSize='md' as='b' >Item Total ({data.length} Item)</Text></div>
                              <div ><Text fontSize='2xl' as='b' >Rs. {sum}</Text></div>
                          </div>

                      
                          <div className={styles.boxTypeThree} >
                              <div> <Text fontSize='md' as='b' >Shipping</Text></div>
                              <div ><Text fontSize='xl' as='b' color='red' >FREE</Text></div>
                          </div>
                          <hr/>

                          <div className={styles.boxTypeThree} >
                              <div> <Text fontSize='md' as='b' >Grand Total</Text></div>
                              <div ><Text fontSize='xl' as='b'  >Rs.{sum}</Text></div>
                          </div>
                            <br/>
                          <Center  bg='#20a87e' h='50px' w="100%" color='white'>
                            <a href="/payment" style={{color:"white",textDecorationLine:"none" }}>CHECKOUT</a>
                          </Center>
                  </div>
                        
                        
              </div>  
            </div>
      </div>
    </>
  )
}

export default CartPage
