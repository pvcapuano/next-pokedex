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
    <div className="h-full">
      {console.log(favoritos)}
      {console.log(avistados)}

      <h2>Avistados:</h2>
      {avistadosList.map((avistado) => (
        <div key={avistado.id}>
          <p>{avistado.name}</p>
          <img src={avistado.image} />
        </div>
      ))}

      <h2>Favoritos:</h2>
      {favoritosList.map((favorito) => (
        <div key={favorito.id}>
          <h1>{favorito.name}</h1>
          <img src={favorito.image} />

          {favorito.types.map((item, index) => (
            <span
              className="text-blue-600 font-bold bg-blue-200 text-sm md:text-md border rounded-md p-1 uppercase mx-2 cursor-pointer"
              key={index}
            >
              {item}
            </span>
          ))}
          <h3 className="text-blue-200 text-sm md:text-md">
            {favorito.height * 10} cm
          </h3>
          <h3 className="text-blue-200 text-sm md:text-md">
            {favorito.weight / 10} kg
          </h3>
          <h1 className="font-bold text-red-600 text-xl md:text-2xl">
            {favorito.observations}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Pokedex;
