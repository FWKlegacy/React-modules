import { useState, createContext } from "react";

const userContext= createContext; 


function User(){
const[isUser,setIsUser]=useState("Brevian Wafula");
return(

     <h1>{`Hello ${isUser}!`}</h1>
  

);

};

export default User;