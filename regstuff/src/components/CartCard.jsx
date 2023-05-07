import React from 'react'
import styles from "../Pages/CartPage.module.css";

const test={
    _id: "645749bc0567b0a2fe53a1e8",
    title: "Blue Hybrid Clear Case Cover for iPhone 14",
    image: "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-blue-hybrid-clear-case-cover-for-iphone-14-images/DailyObjects-Blue-Hybrid-Clear-Case-Cover-for-iPhone-14.png?tr=cm-pad_resize,v-2,w-960,h-860,dpr-1",
    price: 1199,
    quantity: 1,
    userId: "645746aa0567b0a2fe53a1e5",
  }

function CartCard() {
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
                        <div className={styles.subBtn}></div>
                        <div className={styles.subBtn}></div>
                        <div className={styles.subBtn}></div>
                    </div>
                    <div className={styles.dlt}></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartCard
