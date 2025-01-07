import "swiper/swiper-bundle.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


export default function CapsCarousel({ onAddToCart }) {
  const caps = [
    { id: 1, name: "Bulbasaur", price: "10€", image: "/images/bulbasur.jpg" },
    { id: 2, name: "Charmander", price: "20€", image: "/images/Charmander.jpg" },
    { id: 3, name: "Gengar", price: "30€", image: "/images/gorra-gengar.jpg" },
    { id: 4, name: "Pikachu", price: "50€", image: "/images/pikachu.jpg" },
  ];

  return (
    <Swiper className="box-carousel"
      spaceBetween={50}
      slidesPerView={1} // Cantidad de elementos visibles
      navigation // Controles para navegar (opcional)
      pagination={{ clickable: true }} // Paginación (opcional)
    >
      {caps.map((cap) => (
        <SwiperSlide key={cap.id}>
          <div className="product-Caps">
            <img src={cap.image} alt={cap.name} className="product-image" />
            <h2>{cap.name}</h2>
            <p>{cap.price}</p>
            <button onClick={() => onAddToCart(cap)}>Añadir a Pokebola</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
