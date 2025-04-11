import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContextProvider';

const ChildContext = () => {
    const login = useContext(LoginContext);
    console.log(login);
  return (
    <div>
        <h1>This is the Component from Child</h1>
        

    </div>
  )
}

export default ChildContext