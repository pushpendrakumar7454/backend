import { createContext, useContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState("");

    return (
        <authContext.Provider value={{ accessToken, setAccessToken, user, setUser }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => {
    let context = useContext(authContext);
    if (!context) {
        throw new Error("useAuth must be used within an authProvider");
    }

    return context;
};

export default AuthContextProvider;