import React from "react";

const Card = ({ cliente }) => {
  const {nombre, cancion} = cliente;
  return (
    <div>
      <h2>Hola {nombre}</h2>
      <h4>Sabemos que tu canción preferida es {cancion}</h4>
    </div>
  );
};

export default Card;


