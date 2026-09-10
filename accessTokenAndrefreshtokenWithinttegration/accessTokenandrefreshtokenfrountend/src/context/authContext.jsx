import { createContext } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  return (
    <authContext.Provider>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;


