import React, { useState } from 'react'
import "./Undo.css"
// import { click } from '@testing-library/user-event/dist/click'


function Undocounter() {
  const [count,setCount] = useState(0)
const [historydata,setHistoryData] = useState([])


const undo = () =>{
if(historydata.length > 0 ){
  let prevHist = [...historydata]
  let formData = prevHist.shift()
  setHistoryData(prevHist)
  setCount(formData.prev)
}
}



  const history = (key,prev,curr) => {
let obj = {
  key,
  prev,
  curr
}
let comeHistory = [...historydata]
comeHistory.unshift(obj)
console.log(comeHistory);
undo(key,prev,curr)
setHistoryData(comeHistory)
}

const click = (key) =>{
        const change = parseInt(key)
        history(key,count,count + change)
 setCount((prev)=>prev + change) 
    }
   
  return (
   <>
   <button onClick={undo}>Undo</button>
   {
    [-100,-10,-1].map((btn)=>{
        return <button onClick={()=>{click(btn)}}>{btn}</button>
    })
   }

   <h1>{count}</h1>
   <button>redo</button>
   {
    ['+100','+10','+1'].map((btn)=>{
      return <button onClick={()=>{click(btn)}}>{btn}</button>
    })
   }
    <div className='box'>
    {
historydata.map((item)=>{
return (
  <div>
  <div>{item.key} = {item.prev} : {item.curr}</div>
</div>

)
})
    }
    </div>
   </>
  )
}

export default Undocounter