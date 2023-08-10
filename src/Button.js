import React, { useState } from 'react'

const Button = () => {
    const [name,setname] =useState("Sangeetha")
    const handleclick1 = ()=>{
        const names =['PRIYA ',"RAJ","SANGEE"]
    
        const int =Math.floor(Math.random()*3)
         
        setname(names[int])
       
        
     }
    const handleclick = (n)=>{
    //    alert(`hii ${n}`)
    }
    const handleclick3 = (n)=>{
        alert(`hii ${n.target.innerText}`)
     }
  return (
    <><b>{name} Raj</b>
    <button onClick={handleclick1} >onclick</button>
    {/* <button onClick={() => {handleclick('riya')}}>onclick</button>
    <button onClick={(e) => {handleclick3(e)}}>subscribe</button>
    */}
    </>
  )
}

export default Button