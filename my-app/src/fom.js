import React, { useState } from "react";


function MyForm(){
const[name, setName]= useState("");


const handleSubmit=(event)=>{
 event.preventDefault();
 alert(`The name you entered was: ${name}`)
}

return(
<form onSubmit={handleSubmit}>
    <label>
        Enter your Name:
        <input type="text" value={name}
        onChange={e=>setName(e.target.value)}>
        </input>
    </label>
    <input type="submit"></input>
    
</form>
);

}

export default MyForm;