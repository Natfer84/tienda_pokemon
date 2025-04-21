import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import FetchData from "./page/FetchData_";
import Car from "./component/Car"; // Usamos el componente Car directamente
import "./App.css";
import Caps from "./component/Caps";

function App() {
  // Estado para el carrito (ahora incluye cantidad de productos)
  const [cart, setCart] = useState([]);

  // Función para añadir productos al carrito o incrementar cantidad
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (item) => item.product.name === product.name
      );
      if (productIndex !== -1) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        const newCart = [...prevCart];
        newCart[productIndex].quantity += 1;
        return newCart;
      } else {
        // Si no está en el carrito, añadirlo con cantidad 1
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Función para eliminar productos del carrito
  const handleRemoveFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.name !== product.name)
    );
  };

  // Función para incrementar la cantidad de un producto
  const handleIncrement = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const productIndex = prevCart.findIndex(
        (item) => item.product.name === product.name
      );
      if (productIndex !== -1) {
        newCart[productIndex].quantity += 1;
      }
      return newCart;
    });
  };

  // Función para decrementar la cantidad de un producto
  const handleDecrement = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const productIndex = prevCart.findIndex(
        (item) => item.product.name === product.name
      );
      if (productIndex !== -1 && newCart[productIndex].quantity > 1) {
        newCart[productIndex].quantity -= 1;
      }
      return newCart;
    });
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
            </>
          }
        />
        <Route
          path="/product"
          element={<FetchData onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/car"
          element={
            <>
              <Caps onAddToCart={handleAddToCart} />
              <Car
                onAddToCart={handleAddToCart}
                pokemonList={cart}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onRemove={handleRemoveFromCart}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
