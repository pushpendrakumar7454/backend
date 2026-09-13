import { createContext, useContext, useState } from "react";

export const authContext=createContext()

const authContextProvider=({children})=>{

    const [accessToken, setaccessToken] = useState(null)
    const [user, setUser] = useState(null)
    return <authContext.Provider value={{accessToken,setaccessToken,user,setUser}}>{children}</authContext.Provider>
}


export const useAuth=()=>{
    const context=useContext(authContext)

    if(!context){
        throw new Error ("useAuth must be within authProvider")
    }
    return
}

export default authContextProvider