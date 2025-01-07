import React from "react";



export default function Car({
  pokemonList,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  if (!pokemonList || pokemonList.length === 0) {
    return (
      <div className="containerCart">
        <div className="boxCart_Carrito_Vacio">
          <h2>Pokebola</h2>
          <p>
            La Pokebola está vacía.
            <br></br>
            Igual le interesa alguno de estos productos.
          </p>
        </div>
        <>
        </>
      </div>
    );
  }
  return (
    <div className="container_boxCart_Carrito">
      <div className="boxCart_Carrito">
        <h2>Pokebola</h2>
        <div className="boxCart_Carrito__Datos">
          {pokemonList.map((item, index) => (
            <div key={index} className="boxCart_Carrito__Datos_producto">
              <div className="boxCart_Carrito__Datos__image">
                <img src={item.product.image} alt={item.product.name} />
              </div>
              <div className="boxCart_Carrito__Datos__name">
                {item.product.name}
              </div>
              <div className="boxCart_Carrito__Datos__price">
                {item.product.price}€
              </div>
              {/* Contador de cantidad */}
              <div className="quantity-controls">
                <button onClick={() => onDecrement(item.product)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrement(item.product)}>+</button>
              </div>
              {/* Botón para eliminar el producto */}
              <button onClick={() => onRemove(item.product)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
