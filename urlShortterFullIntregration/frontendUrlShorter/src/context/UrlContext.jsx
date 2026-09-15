import { createContext, useState, useContext } from "react"

export const urlContext = createContext()
export const UrlContextProvider = ({ children }) => {
    const [url, setUrl] = useState([])
    const [formValue, setFormValue] = useState({
        url: ""
    })
    return (
        <urlContext.Provider
            value={{
                url,
                setUrl,
                formValue,
                setFormValue
            }}
        >
            {children}
        </urlContext.Provider>
    )
}

export const useUrl = () => {

    const context = useContext(urlContext)

    if (!context) {
        throw new Error("useUrl must be used inside urlContextProvider")
    }

    return context
}

export default UrlContextProvider