import React, { useState } from "react";
import Baby from "./components/baby";

function App() {

  const [inputText , setinputText] = useState("")
  const [items , setItems] = useState([ ]);

  function handleChange(event) {

  

    const newValue = event.target.value

    setinputText(newValue);
    
  }

  function handleClick() {

  setItems(prevItems =>{
    return [...prevItems ,inputText]
  })

  setinputText("")




    
  }

  function deleteItem(id) {

    setItems(prevItems=>{

     return prevItems.filter((item , index)=>{
       return  id !== index
     })

    })

   
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button  className="abc" onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         { items.map((todoItem , index)=>{

             return <Baby
             key = {index}
             id = {index}
             text = {todoItem}
             Delete = {deleteItem}
              />


          })}

         
        </ul>
      </div>
    </div>
  );
}

export default App;
