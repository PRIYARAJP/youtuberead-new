import React from 'react'
import {FaPlus} from'react-icons/fa'
import { useRef } from 'react'
const Additem = ({newItem,setnewItem,handleSubmit}) => {

  const inputRef =useRef()
  return (
   <>
  <form onSubmit={handleSubmit}>
  <label htmlFor='add'>ADD Item</label>
    <input
    autoFocus
    ref={inputRef}
    type='text'
    placeholder='Add Item'
    id='add'
  
    required
    value={newItem}
    onChange={(e)=>setnewItem(e.target.value)
        }
    />
    <button type='submit'  
    // onClick={handleSubmit} 
    onClick ={()=>
    inputRef.current.focus()}
    >
        <FaPlus />
    </button>
  </form>
   </>
  )
}

export default Additem