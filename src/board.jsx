export default function Board({task,index,tasklist,settasklist}){
let handledelete = ()=>{
    let rmidx = tasklist.indexOf(task);
   
    settasklist((currenttask) => 
        currenttask.filter((todo,idx) => idx !== rmidx)
    );
   
}


    return(
       <div>

           <li key={index}>{task}</li>

           <button onClick={handledelete}>
            delete
           </button>
       </div>
        
    )
}