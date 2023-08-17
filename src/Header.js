import React, { useState } from 'react'
// import Button from './Button'

const Header = (props) => {
   const Headerer = () => {
    const names =[' List '," Item"]
    const API_URLONLINE="https://jsonplaceholder.typicode.com/photos";
    const [apii,setapi]=useState(['HII','hello']);
  fetch( API_URLONLINE)
      .then(response => response.json())
      .then(json => setapi(json))

    const int =Math.floor(Math.random()*2)
      return (
       <>
        {apii}
       {names[int] }
       </>
      )
    }
    
  return (
    <div className='header'>   Welcome {props.tit}   <b>{Headerer()}</b>
      {/* <div>Header ctrl+alt+r select rafce for windows shift+com+r for mac</div> */}
   {/* <Button/> */}
    </div>
  )
}

export default Header