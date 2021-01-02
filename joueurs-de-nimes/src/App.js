import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Effectif from "./components/Effectif";
import Articles from "./components/Articles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/effectif" component={Effectif} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
