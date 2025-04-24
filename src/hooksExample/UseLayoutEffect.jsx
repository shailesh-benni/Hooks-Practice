import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
//it is similar to / same as useEffect......But useEffect runs after the DOM is printed on the browser and useLayout runs before the DOM printed on the Browser
//The most common use case of useLayout is to get the dimension of the layout... Thats why its name is useLayoutEffect
const UseLayoutEffect = () => {
    const [toggle, setToggle] = useState(false);
    const textRef = useRef();
  
  
    useLayoutEffect(()=>{
        console.log("useLayoutEffect Runs");
    },[toggle])
    
    useEffect(()=>{
        console.log("useEffect Runs");
    },[toggle])
    
    //try this and comment layoutEffect


    // useEffect(()=>{
    //     if(textRef.current != null){
    //         const dimension = textRef.current.getBoundingClientRect();
    //         textRef.current.style.paddingTop = `${dimension.height}px`;
    //     }
    // },[toggle])
    
    
    useLayoutEffect(()=>{
        if(textRef.current != null){
            const dimension = textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop = `${dimension.height}px`;
        }
    },[toggle])



    


//Work Flow : ---> React Calculate This Component ---> useLayoutEffect(Synchronous) ----> React Prints all Elements ---> useEffect(Asynchronous)



  return (
    <div>
        <button className='btn' onClick={()=>setToggle(!toggle)}> Toggle</button>
        {toggle && <h4 ref={textRef}>Code Bless You</h4>}
    </div>
  )
}

export default UseLayoutEffect