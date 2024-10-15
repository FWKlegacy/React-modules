import { useEffect, useRef, useState } from "react";


function Track(){
const[inputValue, setInputValue]=useState("");
const previousValue= useRef("");

useEffect(()=>{
    previousValue.current= inputValue;
},[inputValue]);

return(
<>
<input type="text" value={inputValue}
onChange={(e)=>setInputValue(e.target.value)}/>
<h2>Current Value : {inputValue}</h2>
<h2>previous Value : {previousValue.current}</h2>
</>
);

}

export default Track;