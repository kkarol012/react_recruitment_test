import React from "react";
import { Provider } from "react-redux";
import store from "../../app/store";
import CartContainer from "../Cart/CartContainer";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <CartContainer />
    </Provider>
  );
};

export { App };
