
import React from "react";
import { Provider } from "react-redux";
import {store} from "../src/app/store";
import Register from "./features/auth/ui/pages/Register";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Register />
      </div>
    </Provider>
  );
};

export default App;
