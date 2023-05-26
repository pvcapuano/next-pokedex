import React from "react";

const CardFavorito = ({ favorito, onDelete }) => {
  const handleDelete = () => {
    onDelete(favorito.id);
  };

  return (
    <div className="w-48 md:w-56 min-h-full border flex flex-col items-center justify-between bg-blue-100 rounded-lg shadow-2xl p-2">
      <h1 className="font-bold text-blue-800 uppercase text-md md:text-lg my-2">
        {favorito.name}
      </h1>
      <img className="w-24 md:w-32" src={favorito.image} />

      <div className="flex my-1">
        {favorito.types.map((item, index) => (
          <span
            className="text-blue-600 font-bold bg-blue-200 text-sm md:text-md border rounded-md p-1 uppercase mx-2 cursor-pointer"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between items-center">
          <h3 className="text-blue-800 text-md md:text-lg font-bold">
            Altura:
          </h3>
          <h3 className="text-blue-800 text-sm md:text-md ml-1">
            {favorito.height * 10} cm
          </h3>
        </div>

        <div className="flex justify-center items-center ml-2">
          <h3 className="text-blue-800 text-md md:text-lg font-bold">Peso:</h3>
          <h3 className="text-blue-800 text-sm md:text-md ml-1">
            {favorito.weight / 10} kg
          </h3>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-justify text-blue-800 text-sm md:text-md w-32 break-all my-1 border border-gray-500 rounded-md p-1">
          {favorito.observations}
        </p>

        <button
          className="w-full bg-red-500 rounded-xl text-blue-100 p-1 hover:bg-blue-800 text-sm md:text-md my-2"
          onClick={handleDelete}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default CardFavorito;
