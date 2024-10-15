import { useState } from "react";



function Car(){
    const[myCar, setMyCar]=useState("volvo");

    const handleChange=(event)=>{
        setMyCar(event.target.value)
    }

    return(
        <form>
            <select value={myCar} onChange={handleChange}>
            <option value="VOLVO">VOLVO</option>
            <option value="BMW"> BMW</option>
            <option value="TOYOTA">TOYOTA</option>
            <option value="MERCEDES">MERCEDES</option>
            </select>
        </form>
    );
}

export default Car;