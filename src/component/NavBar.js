import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="containerNav">
      <div className="containerNav__div__h1__nav">
        <h1 className="containerNav__h1">Pokemanía</h1>
      </div>
      <div className="boxHeader__div__img">
        <img
          src="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/mkrauslhughhtnvnvfcw"
          alt="pokemon"
        ></img>
      </div>

      <nav className="boxNavBar">
        <ul className="boxNavBar__Ul">
          <li className="boxNavBar__Li">
            <Link to="/">Inicio</Link>
          </li>
          <li className="boxNavBar__Li">
            <Link to="/product">Productos</Link>
          </li>
          <li className="boxNavBar__Li li2">
            <Link to="/car">
              <img
                src="https://w7.pngwing.com/pngs/173/464/png-transparent-pokemon-ball-pokeball-area-wiki-technology-thumbnail.png"
                alt="bola de pokemon"
                className="boxNavBar__Li__img"
              ></img>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
