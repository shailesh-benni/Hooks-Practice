import React, { useReducer } from 'react'
//It works like state management tool...
//Always use use reducer hook when you have lot of state to manage with its methods

//useReducer is used to manage complex states


const initialState = {count:0};

const reducer = (state, action)=>{
    console.log(action);

    switch (action.type) {
        case "increase":
            return {count:state.count + 1};
        case "decrease":
            return {count:state.count - 1};
    
        default: return state;
    }
    
}

const UseReducerHook = () => {
   const [state, dispatch] = useReducer(reducer, initialState ); //dispatch is userDefined name + it is the syntax(It takes two args with is state-function and initial state and returns an array with 2 values )
    function increaseCounter(){
        dispatch({type:"increase"});
    }
    function decreaseCounter(){
        dispatch({type:"decrease"});
    }
  return (
    <div>
        <h1 className='text-5xl'>Count : {state.count} </h1>
        <button onClick={increaseCounter} className='btn btn-soft btn-error'>Increase</button>
        <button onClick={decreaseCounter} className='btn btn-soft btn-success'>Decrease</button>
    </div>
  )
}

export default UseReducerHook