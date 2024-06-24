import React, { useState } from 'react'
import QRCode from "react-qr-code";
function Qr() {
    const [data,setData] = useState('')
    const [show,setShow] = useState(false)
  return (
   <>
   {}
   <input  type='text' placeholder='url' onChange={(e)=>{setData(e.target.value)}}/>

   <button onClick={()=>{setShow(true)}}>submit</button>
{ show &&  <QRCode  value={data}/>}
   </>
  )
}

export default Qr