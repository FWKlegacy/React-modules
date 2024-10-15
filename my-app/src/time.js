import { useEffect, useState } from "react";

function Timer(){
const[count, setCount]= useState(0);

useEffect(()=>{
let Timer= setTimeout(()=>{
setCount((count)=>count+1);
},1000);

return ()=> clearTimeout(Timer);

},[]);

return <h1>i have rendered {count} times !</h1>


};

export default Timer;