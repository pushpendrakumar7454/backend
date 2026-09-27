import { createContext, useContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 600,
    currency: "INR",
    size: "S",
    stock: 45,
  });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const [updateData, setUpdateData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <authContext.Provider
      value={{
        accessToken,
        formData,
        setFormData,
        setAccessToken,
        user,
        setUser,
        formValues,
        setFormValues,
        updateData,
        setUpdateData,
        products,
        setProducts,
        loading,
        setLoading
      }}>
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
