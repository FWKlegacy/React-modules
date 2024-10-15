/*UseEffect explained
he useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.*/

import { useRef } from "react";


function Element(){
const inputElement=useRef();

const focusInput=()=>{
    inputElement.current.focus();


    return (
<>
<input type="text" ref={inputElement}/>
<button onClick={focusInput}>Click Here</button>
</>
    );
};

}


export default Element;