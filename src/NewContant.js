import React from 'react'
import Listitem from './Listitem'


const NewContant = ({items,seTit,handleCheck}) => { 
//     const [items,setitems] =useState([
//           {
//           id :1,
//             item: "Like",
//             checked: true,
//           }
//           ,{
//             id:2,
//             item: "Hate",
//             checked: false,
//           }
//           ,{
//             id :3,
//               item: "love",
//               checked: true,
//           }
//           ,
//     ]);


// const setit = (id) => {
//   const listdelete =items.filter((item)=>item.id!==id )
//   setitems (listdelete)
// }
// const handlecheck =((id)=>{
//   const listItems =items.map((item)=>item.id===id ? {...item,checked:!item.checked}:item)
// setitems(listItems)

// })
  return (
    <>
      {(items.length)?(
        <ul>
               <Listitem
               items={items}
               seTit={seTit}
               handleCheck={handleCheck}
               />
        </ul>):<p>The list is empty</p>}
    </>
  )
}

export default NewContant