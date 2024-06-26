import React, { useState } from 'react'
import "./Modale.css"
function Modale(){
    const [show,setShow] = useState(false)
    const [cross,setCross] = useState(false)
    const dikha = () =>{
        setShow(true)
    }
    const close = () =>{
        setShow(false)
    }
    const click = () =>{
      setCross(true)
      setShow(false)
    }
  return (
  <>

  {
    !cross ? (

    <div className='container'>
    <div className='center'>
        <button onClick={dikha}>show offer</button>
        </div>
        {
        show && (<div className='offer'>
        <button onClick={close}>X</button>
        <h3>here is the offer for the summer vacation</h3>
        <button onClick={click}>Accept offer</button>
        </div>)
        }
       
    </div> ) : (
        <div className='accept'>
                    <h1>Offer accepted</h1>
                </div>
    )
       
    }
  </>
  )
}

export default Modale