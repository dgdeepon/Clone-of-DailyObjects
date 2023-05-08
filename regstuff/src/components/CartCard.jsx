import React, { useState } from 'react'
import styles from "../Pages/CartPage.module.css";
import {  AddIcon,MinusIcon,DeleteIcon  } from '@chakra-ui/icons'


function CartCard({test}) {
    const [count, setCount]=useState(0);
    const handleClick=(val)=>{
        if(count===0 && val===-1){
            setCount(0);
        }
        else{
        setCount(count+val);
        }
    }

    const handleDelete=()=>{
        console.log("delete btn clicked")
    }
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
                    <p style={{fontWeight:"bold"}} >Rs.{test.price}</p>
                </div>
                <div className={styles.cardContainerChildTwo}>
                    <div className={styles.btn}>
                        <div className={styles.subBtn} onClick={()=>{
                            handleClick(-1)
                        }} ><MinusIcon/></div>
                        <div className={styles.subBtn}>{count}</div>
                        <div className={styles.subBtn} onClick={()=>{
                            handleClick(1)
                        }} ><AddIcon/></div>
                    </div>
                    <div className={styles.dlt} onClick={handleDelete} ><DeleteIcon/></div>
                </div>
            </div>
        </div>
        <hr/>
        <br/>
    </>
  )
}

export default CartCard
