import React, { useEffect, useState } from 'react'
import "./Search.css"

function Search() {
const [food,setFood] = useState("")
const [response,setResponse] = useState([])
const [show,setShow] = useState(false)
const [list,setList] = useState([])
const [change,setChange] = useState(false)
const inputData = (e) =>{
console.log(e.target.value);
setFood(e.target.value)
}

const items = async(foodParameter) =>{
const url = await fetch(`https://api.frontendeval.com/fake/food/${foodParameter}`)
const response = await url.json()
console.log(response);
setResponse(response)
}

useEffect(()=>{
if(food.length>=2){
     items(food)
     setShow(true)
}
},[food])

const print = (show) =>{
    // console.log(show);
setList((prev)=>[...prev,show])
}

const tick = (itemListData) =>{
    console.log(itemListData);
    setChange(true)
}
  return (
  <>
    <h1>Search</h1>
    <input  type='text' placeholder='search here' value={food} onChange={inputData}/>
    {
       show &&   (<div className='search-list'>
    {
        response.map((item)=>{
             return (
            <div className='search-item'>
                <p onClick={()=>{print(item)}}>{item}</p>
            </div>
             )
        })
    }
    </div>)
    }
    <div className='listChart'>
 {/* <h1>{list}</h1> */}
 {
    list.map((itemList)=>{
 return (
    <div>
 <button onClick={()=>{tick(itemList)}}>check</button>
      <h1 style={{color:change ? "red" : "black"}}>{itemList}</h1>
 <button>X</button>
    </div>
 )
    })
 }
    </div>
  </>
  )
}

export default Search