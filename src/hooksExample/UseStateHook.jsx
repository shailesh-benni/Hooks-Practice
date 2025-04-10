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
        <fieldset className="fieldset">
  <legend className="fieldset-legend">What is your name?</legend>
  <input type="text" className="input" placeholder="Type here" onChange={(e)=>setName(e.target.value)}/>
</fieldset>
        <h1> {name} has clicked Counter : {counter} times!!!</h1>
        <button onClick={increaseCounter} className='btn btn-soft btn-error'>Increase</button>
        <button onClick={decreaseCounter} className='btn btn-soft btn-success'>Decrease</button>
    </div>
  )
}

export default UseStateHook