import React, { useState } from 'react'
import './Light.css'
function Light() {
    const [change,setChange] = useState("light")
    const badal = () =>{
        setChange(change === "light" ? "dark" : "light")

        let store = localStorage.setItem("light","color")
    }




  return (
<>
<div className='dusra' style={{background:change === "light" ? 'white' : 'black', width:'100%', height:"100vh"}}>
<button onClick={badal}>change</button>
</div>

</>
  )
}

export default Light