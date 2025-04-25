import React, { useMemo, useState } from 'react'
//useMemo hook is use to apply memoization in react..
//What is Memoization?? -->it is a technique for improving the performance of the code.....And it is also useful to avoid very expensive calculations on every render when the returned value is not change...


//its syntax is same as useEffect
//in this we can store the value and we return the value

const UseMemoHook = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

   const memoCalculation =  useMemo(()=>{
       return expensiveFunction(number);
    },[number])

    // const calculation = expensiveFunction(number);
    const cssStyle = {
        backgroundColor: dark? "black":"white",
        color:dark?"white":"black",
    };
  return (
    <div>
        
        <input type="number" onChange={(e)=>setNumber(e.target.valueAsNumber)} value={number} />
        <h2>Calculation : {memoCalculation}</h2>
        <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
}

function expensiveFunction(num){
    console.log("Loop Started");
    for (let index = 0; index < 1000; index++){}
    return num;
    //it will return a same number after running the unwanted loop that doest change the value of num
}

export default UseMemoHook