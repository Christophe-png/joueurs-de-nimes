import Joueur from "./Joueur";
import "./Joueur.css";

const Effectif = (props) => (
  <section className="ListeMiels">
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
  </section>
);

export default Effectif;
