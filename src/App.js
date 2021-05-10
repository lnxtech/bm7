import React from "react";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";

// styles
import "./App.css";

const App = () => {
  return (
    <div className="principal__container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
