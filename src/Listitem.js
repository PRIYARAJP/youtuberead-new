import React from 'react'
import { GiCancel } from 'react-icons/gi';
const Listitem = ({items,seTit,handleCheck}) => {
  return (
 <>
    {
        items.map((item)=>(
      <li key={item.id} >
        <span >
        <input type='checkbox' onChange={()=>handleCheck(item.id)}  checked={item.checked}/>
        </span>
        <label 
        style={(item.checked)?{textDecoration:'line-through'}:null}
        onClick={()=>handleCheck(item.id)}>{item.item}</label>  <GiCancel
        role='button'
        tabIndex={0}
        onClick={()=>seTit(item.id)}
        />
      </li>    
      )
      )
      }
       </>
  )

}

export default Listitem