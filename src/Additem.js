import React from 'react'
import {FaPlus} from'react-icons/fa'
const Additem = ({newItem,setnewItem,handleSubmit}) => {

  return (
   <>
  <form onSubmit={handleSubmit}>
  <label htmlFor='add'>ADD Item</label>
    <input
    autoFocus
    type='text'
    placeholder='Add Item'
    id='add'
    required
    value={newItem}
    onChange={(e)=>setnewItem(e.target.value)
        }
    />
    <button type='submit' onClick={handleSubmit}>
        <FaPlus />
    </button>
  </form>
   </>
  )
}

export default Additem