//the hook allow us to access DOM elements
//for creating mutable elements which will not re-render the  components..
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const UseRefHook = () => {
    const [name, setName] = useState("");
    // const [counter, setCounter] = useState(0);   //Using Use State
    const count = useRef(0);
    console.log(count);
    useEffect(()=>{
        // setCounter((prev)=>prev+1); // Using use state
        count.current = count.current+1;
    });

    const inputEle = useRef();
     const handleClick=()=>{
        console.log(inputEle);
        inputEle.current.style.width = "300px";
        inputEle.current.focus();
     }

  return (
    <div>
        <input className='input input-accent' type="text" onChange={(e)=>setName(e.target.value)} />
        
        <h2>Name: {name}</h2>
        {/* <h2> this Count when useState is using : {counter}</h2> */} {/* This leads Infinite */}

        <h2>Renders: {count.current}</h2>


        <input className='input' type="text" ref={inputEle} />
        <button className='btn btn-soft btn-success' onClick={handleClick}>Increase Width</button>
    </div>
  )
}

export default UseRefHook