import React, { Component } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Effectif from "./components/Effectif";
import Joueur from "./components/Joueur";
import Articles from "./components/Articles";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import "./App.css";

class App extends Component {
  state = {
    joueurs: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/Christophe-png/effectif-nimes-olympique/effectif-2020-2021"
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({ joueurs: data });
      });
  }
  render() {
    const { joueurs } = this.state;

    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/effectif" component={Effectif} />
            <Route path="/joueur" component={Joueur} />
            <Route path="/articles" component={Articles} />
            <HomePage />
          </Switch>
          <Effectif joueurs={joueurs} />
        </Router>
      </div>
    );
  }
}

export default App;
