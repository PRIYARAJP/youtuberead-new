import React from 'react'

// import './App.css';
const Footer = ({tit,length}) => {
    const year =new Date()
  return (
    <>
    <div>{length} List {length <=1 ?"item":"items"}</div>
    <div className='Footer'>Thank you {tit} {year.toLocaleTimeString()}</div>
  
    </>
    )
}
Footer.defaultProps ={
  tit:"JOS"
}
export default Footer