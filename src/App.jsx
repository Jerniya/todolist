import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtask from "./components/Addtask"

function App() {
  const [task, setTask] = useState("")

  const [items, setItems] = useState([]);

  function addItem() {
    
   if(task=="") 
     {
      console.log(items)
     }
     else{
      const item = {
      
      value: task
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);
    
  }
    
  }

  const handle=(e)=>{
    e.preventDefault();
   addItem();
   setTask("");

  }
 
  function deleteItem(id) {
    const newArray = items.filter((i) => i !== id);
    setItems(newArray);
  }

  return (
    <>
    <h1 class="head">YOUR_TODO_LIST</h1>
      <div>
        <div class="main">
          <form  class="nav" onSubmit={handle}>
           
            <input type="text-area" placeholder="enter your task" value={task} onInput={(e)=>setTask(e.target.value)}></input>

          <button type="submit" class="btn" >ADD NEW TASK</button>
          </form>
           
          <div id="cont">
        {items.map((item) => {
          return (
            <div>
              <p id="k">
                {item.value}
               
               
                
                <button id="done" onClick={() => deleteItem(item)}>DONE</button>
                </p>
                </div>
          );})
       }

        
        </div>
         
 

        </div>
      </div>
   
    </>
  )

}



export default App
