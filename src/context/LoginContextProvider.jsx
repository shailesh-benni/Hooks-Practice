import React, { createContext } from 'react'
export const LoginContext = createContext();
const LoginContextProvider = ({children}) => {
    const [userDetails, setUserDetails] = (true);
  return (
    <LoginContext.Provider value={userDetails} >
        {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider