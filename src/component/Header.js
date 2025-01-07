import React from "react";

export default function Header() {
  return (
    <div className="containerHeader">
      <div className="boxHeader">
        <div className="boxHeader__div__img2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Gf7080diltMSlcLy9kPIeRAC60slkt3YWhwQ_tJxJYG3aKpBN89YbD56MPHAZJX2OK4&usqp=CAU"
            alt="pikachu"
          ></img>
        </div>

        <div className="boxHeader__div__img2__p">
          <h3>LA TIENDA POKÉMON</h3>
          <p>
            ¡Bienvenido a nuestra Tienda Pokémon! Aquí encontrarás una amplia
            selección de productos dedicados al fascinante mundo de Pokémon.
            Sumérgete en la aventura con las figuras Pokémon, los peluches
            Pokémon, las mochilas Pokémon y mucho más.
          </p>
        </div>

        <div className="boxHeader__div__img3">
          <img
            src="https://preview.redd.it/d83o8zhw83za1.jpg?width=640&crop=smart&auto=webp&s=5f946ecdb1e755a948e9be084d558feee51a96b7"
            alt="Charmander animal pokemon"
          ></img>
        </div>

        <div className="boxHeader__div__img3__p">
          <h3>Descubre los productos</h3>
          <p>
            No te pierdas nuestras ofertas especiales y nuevos productos en la
            Tienda Pokémon. La Tienda Pokémon, como si de un Pokémon Center se
            tratara, ofrece tanto a adultos como a niños artículos Pokémon de
            calidad: camisetas, sudaderas, zapatillas, disfraces, sombreros,
            lámparas 3D, peluches... Tanto si eres un fan de la primera
            generación Pokémon como de las generaciones más recientes, ¡hay algo
            para todos!
          </p>
        </div>
      </div>
    </div>
  );
}
