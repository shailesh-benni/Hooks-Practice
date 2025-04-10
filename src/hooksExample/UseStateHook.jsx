import React,{useState} from 'react'

const UseStateHook = () => {
    const [counter,setCounter] = useState(0);
    const [name, setName] = useState("");
    // const array = useState(0);
    // const counter = array[0];
    // const setCounter = array[1];
    function increaseCounter(){
        setCounter(counter+1);
    }
    function decreaseCounter(){
        setCounter(counter-1);
    }

  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <h1> {name} has clicked Counter : {counter} times!!!</h1>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>
    </div>
  )
}

export default UseStateHook