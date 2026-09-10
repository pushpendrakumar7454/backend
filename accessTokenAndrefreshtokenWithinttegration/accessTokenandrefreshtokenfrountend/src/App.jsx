import React from "react";
import AppRoute from "./router/AppRoute";
import AuthContextProvider from "./context/authContext";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRoute />
      </AuthContextProvider>
    </div>
  );
};

export default App;
