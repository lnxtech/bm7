import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home.js";
import Menu from "../pages/Menu/Menu.js";

// styles
import "../App.css";

const App = () => {
  return (
    <div className="principal__container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/menu" component={Menu} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
