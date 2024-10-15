import { useCallback, useState } from "react";
import Todo from "./todo";

function Task(){
const[count, setCount]=useState(0);
const[todos, setTodo]=useState([]);

const increment=()=>{
    setCount((e)=>e+1);
}

const addTodo=useCallback(()=>{
    setTodo((t)=>[...t, "Add New"]);
},[todos]);

 return(
<>
<Todo todos={todos} addTodo={addTodo}/>
<hr/>
<div>
    Count : {count}
    <button onClick={increment}>+</button>
</div>
</>
 );
}

export default Task;