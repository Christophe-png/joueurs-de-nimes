import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://espacecrocos.fr/wp-content/uploads/2018/05/Logo.jpg"
        alt="logo club Nimes Olympique"
      />

      <Link className="nav-homepage" to="/">
        <h1 className="title">NIMES OLYMPIQUE</h1>
        <h2 className="title">"Impossible n'est pas nimois !"</h2>
      </Link>
      <ul>
        <li>
          <Link className="nav-effectif" to="/effectif">
            Effectif saison 2020/2021
          </Link>
        </li>
        <li>
          <Link className="nav-articles" to="/articles">
            "Les crocos à travares l'histoire !"
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
