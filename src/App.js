
import { useState,useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import NewContant from './NewContant';
import Additem from './Additem';
import Searchitem from './Searchitem';
import apiRequest from './apiRequest';

// import Usestate from './Usestate';

function App() {
  const API_URL="http://localhost:3500/items";
  
  const [items,setitems] =useState(
    // JSON.parse(localStorage.getItem("todp_list")) || 
    []
    );

const[Search,SetSearch] =useState('')
const [newItem,setnewItem]=useState('')
const addItem=async (item)=>{
  const id =items.length?items[items.length-1].id+1:1;
  const addNewItem ={id,checked:false,item}
  const listItem =[...items,addNewItem]
  setitems(listItem)
  // localStorage.setItem("todp_list",JSON.stringify(listItem))

  const postOptions ={
    method :'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(addNewItem)
   
  }
  const result = await apiRequest(API_URL,postOptions)
  if (result) setfatchError(result)
}
const handleSubmit =(e)=>{
e.preventDefault();
addItem(newItem)
setnewItem('')
}

const [fatchError,setfatchError]=useState( null)
useEffect(  ()=>{
  const fatchdata = async ()=>{
    try{
      const response =await fetch(API_URL);
      console.log(response);
      if (!response.ok) throw Error ("Data not recived")
      const listItems =await response.json();
      setitems(listItems);
      setfatchError(null)
    } catch(err){
      setfatchError(err.message);
    }
  }
  (async () => await fatchdata())()
  // JSON.parse(localStorage.getItem("todp_list"))
// setTimeout(() => {
//   (async () => await fatchdata())()
// }, 3000);
},[])
const seTit = async(id) => {
const listItem =items.filter((item)=>item.id!==id )
setitems (listItem)

const deleteOptions={
  method : "DELETE"
}
const reqUrl=`${API_URL}/${id}`
const result = await apiRequest(reqUrl,deleteOptions)
if (result) setfatchError(result)

// localStorage.setItem("todp_list",JSON.stringify(listItem))
}
const handleCheck =(async (id)=>{
const listItem =items.map((item)=>item.id===id ? {...item,checked:!item.checked}:item)
setitems(listItem)
// localStorage.setItem("todp_list",JSON.stringify(listItem))
const myItem=listItem.filter((item)=>item.id===id)
const updateOptions ={
  method :'PATCH',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({checked:myItem[0].checked})
 
}
const reqUrl=`${API_URL}/${id}`
const result = await apiRequest(reqUrl,updateOptions)
if (result) setfatchError(result)

})
  
  //  const Apps = () => {
  //   return (
  //     <div>App</div>
  //   )
  // }
  
  return (
    <>
    <header>
  
       <Header tit={"Riya"} />
       <Additem
          newItem={newItem}
          setnewItem={setnewItem}
          handleSubmit={handleSubmit}
          />
          <Searchitem
          Search={Search}
          SetSearch={SetSearch}
          />
          <main
          > 
          {fatchError && <p>{`Error : ${fatchError}`}</p>}
        <NewContant 
        items={items.filter(item => ((item.item).toLowerCase()).includes(Search.toLowerCase()))}
        seTit={seTit}
        handleCheck={handleCheck}
        /></main>
        <Footer tit={"Riya"} length={items.length}/>
      {/* <Usestate/ */}
      {/* <p >hi{Apps()}</p> */}
     </header>
    </>)
       
        
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
