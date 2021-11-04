import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Create store only accepts two parameters: reducer and middleware
// so we use compose to "compose" every middleware. But to apply any middleware
// we need to use applyMiddleware
// the reducer will be charged to update the state of the store when an action
// is triggered
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
