import Joueur from "./Joueur";
import "./Joueur.css";

const Effectif = (props) => (
  <div>
    {props.joueurs.map((singleJoueur) => (
      <Joueur
        key={singleJoueur.id}
        nom={singleJoueur.nom}
        image={singleJoueur.image}
        age={singleJoueur.age}
        né={singleJoueur.né}
        poste={singleJoueur.poste}
      />
    ))}
  </div>
);

export default Effectif;
