import { useState } from "react";


export default function Todo({tasklist,settasklist}){
    const [value,setvalue]=useState("");
    let handleaddtask = (e)=>{
        e.preventDefault();
        settasklist([...tasklist,value])
        setvalue("");

    }
    return(
        <>
        <h5>Add a task</h5>
       <form  onSubmit={handleaddtask}>
         <input type="text" placeholder="enter task" value={value} onChange={(e)=>setvalue(e.target.value)} /><br /><br />
        <button type="submit">submit</button>
       </form>
       
        </>
    )
}