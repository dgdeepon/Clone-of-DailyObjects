import React, { useEffect, useState } from 'react'
import styles from "../Pages/CartPage.module.css";
import {  AddIcon,MinusIcon,DeleteIcon  } from '@chakra-ui/icons'

import axios from 'axios';
import { Button } from '@chakra-ui/react';
function CartCard({test,handleClick,handleDelete}) {
   

    

  
  return (
    <>
        <div className={styles.card} >
            <div className={styles.cardImage} >
                <img style={{width:"100%",height:"100%",backgroundColor:"#f7f7f7"}} src={test.image} alt="" />
            </div>
                
            <div className={styles.cardContent}>
                <div className={styles.cardContainerChildOne}>
                    <br/>
                    <p>{test.title}</p>
                    <p style={{fontWeight:"bold"}} >Rs.{Number(test.quantity)*(Number(test.price))}</p>
                </div>
                <div className={styles.cardContainerChildTwo}>
                    <div className={styles.btn}>
                        <div className={styles.subBtn}  ><button disabled={test.quantity<=1&&true} onClick={()=>{
                            handleClick(test._id,test.quantity,-1)
                        }}><MinusIcon /></button></div>
                        <div className={styles.subBtn}>{test.quantity}</div>
                        <div className={styles.subBtn}  ><button onClick={()=>{
                            handleClick(test._id,test.quantity,1)
                        }}><AddIcon  /></button>
                        </div>
                    </div>
                    <div className={styles.dlt}  ><button onClick={()=>handleDelete(test._id)}><DeleteIcon/></button></div>
                </div>
            </div>
        </div>
        <hr/>
        <br/>
    </>
  )
}

export default CartCard
