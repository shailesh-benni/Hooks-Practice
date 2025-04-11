import React from 'react'
import UseStateHook from './hooksExample/UseStateHook'
import UseEffectHook from './hooksExample/UseEffectHook'
import UseContextHook from './hooksExample/UseContextHook'
import LoginContextProvider from './context/LoginContextProvider'//Achhese code organize karne k liye aisa karna padta hai context file wagera banana usme hook ko use karna...

//Konsa Hook Chahiye usko niche app m use karke try karo 


const App = () => {
  return (
    <LoginContextProvider> {/*iss value bina UseContextHook m pass karke ChildContext m use kar sakte hai..*/}
      <UseContextHook/>
    </LoginContextProvider>
  )
}

export default App