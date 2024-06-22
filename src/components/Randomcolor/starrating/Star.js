import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
// import { FaRegStar } from "react-icons/fa";
import './Star.css'
function Star() {
  const [rating,setRating] = useState(0)
  const [hover,setHover] = useState(0)
  console.log(hover);
console.log(rating);
  return (
   <>
    <h1>star</h1>
    {
      [1,2,3,4,5].map((num,index)=>{
  return(  
     <div key={index}>
     <FaStar 
            onClick={()=>{setRating(num)}}
            onMouseOver={()=>{setHover(num)}}
            onMouseLeave={()=>{setHover(rating)}}
            className={`star 
               ${num <= (rating && hover) ? 'on' : 'off'}
            `}
           />
      
    </div>
  )
      })
    }
    {/* <FaRegStar /> */}
   </>
  )
}

export default Star