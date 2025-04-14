//this hook is used to manage global data in react app 
//Global state services themes user settings
// 1. Creating the Context 2.Providing the context 3. consuming the context

import React from 'react'
import ChildContext from './ChildContext'

const UseContextHook = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold'>Below is the child component or used in this component </h1>
      <ChildContext/>
    </div>
  )
}

export default UseContextHook