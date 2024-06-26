import React, { useEffect, useState } from 'react'

function Search() {
const [food,setFood] = useState("")
const [response,setResponse] = useState([])
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
}
},[food])

  return (
  <>
    <h1>Search</h1>
    <input  type='text' placeholder='search here' value={food} onChange={inputData}/>
    {/* <h1>{food}</h1> */}
    {
        response.map((item)=>{
             return (
            <div>
                <h2>{item}</h2>
            </div>
             )
        })
    }
  </>
  )
}

export default Search