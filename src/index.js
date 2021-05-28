import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </StateProvider>

  // ReactDOM.render(
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>,
  //   document.getElementById('root')
  // );

  //   document.getElementById("root")
);
