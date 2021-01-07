import React from "react";
import Joueur from "./Joueur";
import "./Effectif.css";

const Effectif = (props) => (
  <div className="Effectif">
    {props.joueurs.map((singleJoueur) => {
      console.log(singleJoueur);
      return (
        <Joueur
          key={singleJoueur.id}
          nom={singleJoueur.nom}
          image={singleJoueur.image}
          age={singleJoueur.age}
          né={singleJoueur.né}
          poste={singleJoueur.poste}
        />
      );
    })}
  </div>
);

export default Effectif;
