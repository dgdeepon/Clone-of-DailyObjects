import React, { useState, useEffect } from 'react'
import styles from "./CartPage.module.css";
import { Text } from '@chakra-ui/react';
import { Center, Box   } from '@chakra-ui/react'
import CartComponent from "../components/CartComponent"
import CartCard from '../components/CartCard';



const CartPage = () => {
    const [data, setData]=useState([]);
    const token=useSelector((store)=>{
      return store.UserLoginReducer.token;
    })

    useEffect(()=>{
      getData();
    },[])

    const getData=()=>{
        fetch("https://dailyobject-clonebe.onrender.com/cartData",{
            method:"GET",
            headers:{
                "Authorization":`bearer ${token}`,
                "Content-type":"application/json()"
            }
        }).then((res)=>res.json()).then((res)=>{
          console.log(res);
          return setData(res);
        })
        .catch((err)=>console.log(err.message));
    }


  return (
    <>

    <Text fontSize='4xl' as='b' >SHOPPING BAG</Text>
    <hr/>
    <div className={styles.container} >
            <div className={styles.boxScroll}>
                <CartCard/>
            </div>

            <div className={styles.boxScroll} > </div>
      </div>
    </>
  )
}

export default CartPage
