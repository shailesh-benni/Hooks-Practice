import React, { useEffect, useState } from 'react'
// pehale callBack Function second dependencies(optional) simple word m (what to run or when to run ) 
const UseEffectHook = () => {
    const [counter, setCounter] =useState(0);
    const [otherCounter, setOtherCounter] =useState(5);
    useEffect(()=>{
        document.title = `${otherCounter} new Messages!`
    },[otherCounter]);   //Empty array dependencies m pass karoge toh ek hi baar render hoga !! baar baar nahi (chahiye toh empty array daal k try karo)

    useEffect(()=>{
        console.log("Run useEffect: ",counter);

        return()=>{
            console.log("Clean Up: ", counter);         //Clean Up Function hartime jarurat nahi hai, for example jab koi repeated side effect ko stop karna ho jab component unmount ho tab use karte h
        }
    },[counter])
  return (
    <div>
        <h1 className='text-5xl font-bold'>Counter: {counter}</h1>
        <button className='btn btn-soft btn-success' onClick={()=>setCounter(counter+1)}> Increase</button>
        <h1 className='text-5xl font-bold'> Counter: {otherCounter}</h1>
        <button onClick={()=>setOtherCounter(otherCounter+5)}> Increase</button>
    </div>
  )
}

export default UseEffectHook