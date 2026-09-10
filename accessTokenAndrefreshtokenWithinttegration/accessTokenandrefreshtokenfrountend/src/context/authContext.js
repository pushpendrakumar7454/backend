import { createContext } from "react";

export const authContext = createContext();

const authCotextProvider=({children})=>{
return <authContext.Provider >{children}</authContext.Provider>
}

export default authCotextProvider;



