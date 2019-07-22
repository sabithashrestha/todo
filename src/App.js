import React from "react";
import "./scss/main.scss";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      {/* {JSON.stringify(localStorage.getItem("mainDB"))} */}
      <HomePage />
    </div>
  );
}

export default App;
