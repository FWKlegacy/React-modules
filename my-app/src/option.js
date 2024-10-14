import { useState } from "react";



function Car(){
    const[myCar, setMyCar]=useState("volvo");

    const handleChange=(event)=>{
        setMyCar(event.target.value)
    }

    return(
        <form>
            <option value={myCar} onChange={handleChange}></option>
            <option value="BMW"> BMW</option>
            <option value="TOYOTA">TOYOTA</option>
            <option value="MERCEDES">MERCEDES</option>
        </form>
    );
}

export default Car;