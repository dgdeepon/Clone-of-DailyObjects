import { useState } from "react"

export const Throttle=(fun,delay)=>{
    // const [wait,setWait]=useState(false)
 
let wait=false
// console.log(wait)
if(wait)return

  
         
          fun()
          wait=true
         
            setTimeout(() => {
      
             wait= false
          
            },delay)
        
    //   console.log(fun)
 
}


    //  shouldWait?console.log("true"):console.log("false") 
     
    
  

   
  
