
import React, { useState } from "react";


function MyFomu(){
const[inputs, setInputs]= useState({});


const handleChange= (event)=>{
const name = event.target.name;
const value= event.target.value;
setInputs(values=>({...values,[name]:value}))

}

const handleSubmit=(event)=>{
    event.preventDefault()
    alert("submitted successfully")
}

return(
    <form onSubmit={handleSubmit}>
        <label>Enter your Name :
            <input  input typeof="text" name="username" value={inputs.username || ""} onChange={handleChange}></input>
        </label>
        <label>Enter your Age :
            <input  input typeof="number" name="age" value={inputs.age || ""} onChange={handleChange}></input>
        </label>
        <input type="submit"></input>
    </form>
);

}

export default MyFomu;
  