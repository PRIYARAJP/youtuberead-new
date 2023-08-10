
import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import NewContant from './NewContant';
import Additem from './Additem';
import Searchitem from './Searchitem';

// import Usestate from './Usestate';

function App() {
  const [items,setitems] =useState(JSON.parse(localStorage.getItem("todp_list")));
const[Search,SetSearch] =useState('')
const [newItem,setnewItem]=useState('')
const addItem=(item)=>{
  const id =items.length?items[items.length-1].id+1:1;
  const addNewItem ={id,checked:false,item}
  const listItem =[...items,addNewItem]
  setitems(listItem)
  localStorage.setItem("todp_list",JSON.stringify(listItem))

}
const handleSubmit =(e)=>{
e.preventDefault();
console.log("e",newItem);
addItem(newItem)
setnewItem('')
}
const seTit = (id) => {
const listItem =items.filter((item)=>item.id!==id )
setitems (listItem)
localStorage.setItem("todp_list",JSON.stringify(listItem))
}
const handleCheck =((id)=>{
const listItem =items.map((item)=>item.id===id ? {...item,checked:!item.checked}:item)
setitems(listItem)
localStorage.setItem("todp_list",JSON.stringify(listItem))


})
  
  //  const Apps = () => {
  //   return (
  //     <div>App</div>
  //   )
  // }
  
  return (
    <>
    <header>
  
       <Header tit={"Riya"}/>
       <Additem
          newItem={newItem}
          setnewItem={setnewItem}
          handleSubmit={handleSubmit}
          />
          <Searchitem
          Search={Search}
          SetSearch={SetSearch}
          />
        <NewContant 
        items={items.filter(item => ((item.item).toLowerCase()).includes(Search.toLowerCase()))}
        seTit={seTit}
        handleCheck={handleCheck}
        />
        <Footer tit={"Riya"} length={items.length}/>
      {/* <Usestate/ */}
      {/* <p >hi{Apps()}</p> */}
     </header>
    </>)
       
        
}

export default App;
