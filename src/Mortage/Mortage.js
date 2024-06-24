import React, { useEffect, useState } from 'react'

function Mortage() {
    const [principal,setPrincipal] = useState(0)
    const [interest,setInterest] = useState(0)
    const [year,setYear] = useState(0)
    const [emi,setEmi] = useState(0)
    const change = (e) =>{
        const value = e.target.value
        const id = e.target.id
        if(id === "principal"){
            setPrincipal(value)
        }else if(id === "interest"){
          setInterest(value)
        }else{
            setYear(value)
        }
    }
    // P(r(1+r)^n/((1+r)^n)-1))
    const calculation = () => {
        let rate = interest
           if(principal && rate && year){
            rate = rate /12 / 100
            const calPow = Math.pow(1+rate,year*12)
            const amount = Math.floor(principal * ((rate * calPow) / (calPow -1)))
            setEmi(amount)
           }  
    }
  useEffect(()=>{
    calculation()
  },[principal,year,interest])
  return (
    <>
    principal
    <input type='number' id='principal' onChange={change}/>
interst
    <input  type='number' id='interest' onChange={change}/>
year
    <input  type='number' id='year' onChange={change}/>
    <h3>your emi will be {emi}</h3>
    </>
  )
}

export default Mortage