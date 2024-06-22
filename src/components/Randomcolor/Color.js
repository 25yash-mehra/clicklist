import React, { useState } from 'react'

function Color() {
    const [hex,setHex] = useState('hex')
    const [color,setColor] = useState('')
    const change = () =>{
        let hexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
   let hash = "#"
   for(let i =0;i<6;i++){
    let index = Math.floor(Math.random() * hexColor.length)
    hash += hexColor[index]
    console.log(index);
}
console.log(hash);
setHex(hash)
}
const dusra = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    // setColor(`rgb ${red}, ${green}, ${blue}`)
    // setColor(red,green,blue)
    const rgbColor = `rgb(${red}, ${green}, ${blue})` 
    setColor(rgbColor)
}
  return (
   <>
      <div style={{background:color, width:'100vw', height:"100vh"}}>
        <button onClick={change}>GenerateColor</button>
        <button onClick={dusra} > RGB color</button>
        <h1>{color}</h1>
        </div>
   </>
  )
}
export default Color

