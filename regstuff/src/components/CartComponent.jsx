import React from 'react'
import styles from "../Pages/CartPage.module.css";
import { Text } from '@chakra-ui/react';
import { Center, Box   } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CartComponent = () => {
  const dispatch=useDispatch()
  const cartdata=useSelector((state)=>state.usercartreducer)
  const {data}=cartdata
  
  return (
    <div>
      <div className={styles.container} style={{"alignItems":"center", justifyContent:"center" }} >
        <div className={styles.box} >
            <Text fontSize='2xl' as='b' >{data.length==0?"YOUR SHOPPING CART IS EMPTY":"REGSTUFF"} </Text>
             <p>Fill it with DailyObjects</p>

             <Center marginLeft='25%'  bg='#20a87e' h='50px' w="50%" color='white'>
                <Link to="/products" style={{color:"white",textDecorationLine:"none" }}>BROWSE PRODUCTS</Link>
            </Center>
        </div>
      </div>
    </div>
  )
}

export default CartComponent
