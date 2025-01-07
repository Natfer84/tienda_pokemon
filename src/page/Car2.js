import React from "react";
import Car from "..component/Car"

export default function CarritoP({pokemonList}) {
  return (
    <div className="BoxCart">
      <Car pokemonList={pokemonList}
      />
    </div>
  );
}
