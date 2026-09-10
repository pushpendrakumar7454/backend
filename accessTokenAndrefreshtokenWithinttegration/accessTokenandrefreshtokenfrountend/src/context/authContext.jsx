import { createContext, useContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [accessToken, setAccessToken] = useState(null)
const [loading, setLoading] = useState(true)

  return (
    <authContext.Provider value={{user,setUser,accessToken,setAccessToken,loading,setLoading}}>
      {children}
    </authContext.Provider>
  );
};


export const useAuth=()=>{
  const context=useContext(authContext)
  if(!context){
    throw new Error ("useAuth must be used within an authProvider")
  }
  return context
}

export default AuthContextProvider;


