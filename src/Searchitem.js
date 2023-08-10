import React from 'react'

const Searchitem = ({Search,SetSearch}) => {
  return (
   <form className='searchform' onSubmit={(e)=>e.preventDefault()}>
<label htmlFor='search'>Search</label>
  
  <input 
  id='search'
  type='text'
  role='searchbox'
  placeholder='search items'
  value={Search}
  onChange={(e)=>SetSearch(e.target.value)}
  />
   </form>
  )
}

export default Searchitem