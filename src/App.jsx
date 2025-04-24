import React from 'react'
import UseStateHook from './hooksExample/UseStateHook'
import UseEffectHook from './hooksExample/UseEffectHook'
import UseContextHook from './hooksExample/UseContextHook'
import LoginContextProvider from './context/LoginContextProvider'//Achhese code organize karne k liye aise karna padta hai context file wagera banake usme hook ko use karna...
import UseRefHook from './hooksExample/UseRefHook'
import UseReducerHook from './hooksExample/UseReducerHook'

//Konsa Hook Chahiye usko niche app m use karke try karo 


const App = () => {
  {/*iss value bina UseContextHook m pass karke ChildContext m use kar sakte hai..*/}
  return (
    // <LoginContextProvider> 
    //   <UseContextHook/>
    // </LoginContextProvider>
    // <UseRefHook/>
    <UseReducerHook/>
  )
}

export default App