// import { useState } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import StateWise from "./StateWise";
// import Carousels from "./Carousels";
// import Cards from "./Cards";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const user = "";
  return (
    <div className="app">
      {!user ? (
        <div className="app_body">
          <Login></Login>
        </div>
      ) : (
        <h1>you are logged in</h1>
      )}
    </div>
  );
}

export default App;
