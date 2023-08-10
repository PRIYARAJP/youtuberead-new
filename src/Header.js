import React from 'react'
// import Button from './Button'

const Header = (props) => {
   const Headerer = () => {
    const names =[' List '," Item"]
    
    const int =Math.floor(Math.random()*3)
      return (
       <>
       {/* {names} */}
       {names[int]}
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