import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContextProvider';

const ChildContext = () => {
    const login = useContext(LoginContext);
    console.log(login);
  return (
    <div>
        <h1 className='text-5xl font-bold'>This is the Component from Child</h1>
        

    </div>
  )
}

export default ChildContext