


import React from "react";

export default function Caps({ onAddToCart }) {
  const caps = [
    { id: 1, name: "Bulbasaur", price: "10", image: "/images/bulbasur.jpg" },
    { id: 2, name: "Charmander", price: "20", image: "/images/Gorra-Charmander-Pokemon.jpg" },
    { id: 3, name: "Gengar", price: "30", image: "/images/gorra-gengar.jpg" },
    { id: 4, name: "Pikachu", price: "50", image: "/images/pikachu.jpg" },
  ];

  return (
    <div>
      <h1 className="boxTitle">Gorras</h1>
    <div className="boxCaps">
      {caps.map((cap) => (
        <div key={cap.id} className="product-Caps">
          <img src={cap.image} alt={cap.name} className="product-image" />
          <h2>{cap.name}</h2>
          <p>{cap.price}€</p>
          <button onClick={() => onAddToCart(cap)}>Añadir a Pokebola</button>
        </div>
      ))}
    </div>
    </div>
  );
}
