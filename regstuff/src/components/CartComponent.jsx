import React from 'react'
import styles from "../Pages/CartPage.module.css";
import { Text } from '@chakra-ui/react';
import { Center, Box   } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const CartComponent = () => {
  return (
    <div>
      <div className={styles.container} style={{"alignItems":"center", justifyContent:"center" }} >
        <div className={styles.box} >
            <Text fontSize='2xl' as='b' >YOUR SHOPPING CART IS EMPTY</Text>
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
