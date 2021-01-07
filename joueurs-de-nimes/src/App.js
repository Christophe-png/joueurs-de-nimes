import React, { Component } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Effectif from "./components/Effectif";
import Joueur from "./components/Joueur";
import Articles from "./components/Articles";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    joueurs: [],
    posteFilter: " ",
  };

  handleChangePoste = (event) => {
    this.setState({
      posteFilter: event.target.value,
    });
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
    const { joueurs, posteFilter } = this.state;
    const filteredJoueurs =
      posteFilter === ""
        ? joueurs
        : joueurs.filter((joueur) => joueur.poste === posteFilter);
    return (
      <div className="App">
        <Router>
          <Header />
          <div>
            <label htmlFor="posteSelect">
              Poste{" "}
              <select
                id="posteSelect"
                value={posteFilter}
                onChange={this.handleChangePoste}
              >
                <option value="">&mdash;</option>
                <option value="Gardiens">Gardiens</option>
                <option value="Défenseurs">Défenseurs</option>
                <option value="Milieux de Terrain">Milieux de Terrain</option>
                <option value="Attaquants">Attaquants</option>
              </select>
            </label>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/effectif" component={Effectif} />
            <Route path="/joueur" component={Joueur} />
            <Route path="/articles" component={Articles} />
            <HomePage />
          </Switch>
          <Effectif joueurs={filteredJoueurs} />
        </Router>
      </div>
    );
  }
}

export default App;
