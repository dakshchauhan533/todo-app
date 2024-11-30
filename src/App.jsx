import {useState} from "react";
import Board  from "./board";
import './App.css'
import Todo from './input'
function App() {
  const [tasklist,settasklist]=useState([]);

  return (
    <>
<h1>todo</h1>
<Todo tasklist={tasklist} settasklist={settasklist}/>
    <div>
      {tasklist.map((task,index)=><Board task={task} index={index} tasklist={tasklist} settasklist={settasklist}/>)}
    </div>
    </>
  )
}

export default App
