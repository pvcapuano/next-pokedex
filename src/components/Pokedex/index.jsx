import React from "react";

const Pokedex = ({ favoritos, avistados }) => {
  const favoritosList = [];
  const avistadosList = [];

  favoritos.forEach((favorito) => {
    favoritosList.push(favorito);
  });

  avistados.forEach((avistado) => {
    avistadosList.push(avistado);
  });

  return (
    <div className="h-screen">
      {console.log(favoritos)}
      {console.log(avistados)}

      <h2>Avistados:</h2>
      {avistadosList.map((avistado) => (
        <div key={avistado.id}>
          <p>{avistado.name}</p>
          <img src={avistado.image} />
        </div>
      ))}


      
      <div>
        <h2>Favoritos:</h2>
      </div>
    </div>
  );
};

export default Pokedex;
