import React, { useState } from 'react'

const Usestate = () => {
    const [Count,setCount] =useState(0);
    const pluss = ()=>{
         setCount (Count+1)
         setCount (Count+1)// only one number decresed
    }
    

    const Mines = ()=>{
        setCount ((Count) => {return Count-1})
        setCount ((Count) => {return Count-1})// two number decresed
    }
  return (
    <div>
        <p>Let's Earn money</p>
        <button >Change</button>
        <button onClick={Mines}>-</button>
        <span>{Count}</span>
        <button onClick={pluss}>+</button>
    </div>
  )
}

export default Usestate