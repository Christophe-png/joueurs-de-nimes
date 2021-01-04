import React from "react";
import "./Joueur.css";

function Joueur(props) {
  const { nom, image, age, né, poste } = props;
  return (
    <div className="Joueur">
      <h3>{nom}</h3>
      {<img className="Miel-picture" src={image} alt="Nom du miel" />}
      <div
        className="Honey"
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <p>Age : {age}</p>
      <p>Né à : {né}</p>
      <p>Poste : {poste}</p>
    </div>
  );
}

export default Joueur;
