import React from "react";
import Link from "next/link";

const Card = ({ pokemon, handleSubmit }) => {
  const { name, image, id } = pokemon;

  const handleDetails = () => {
    handleSubmit(pokemon);
  };

  return (
    <Link href={`/pokemon/${id}/`}>
      <div className="border flex flex-col items-center justify-center bg-white rounded-lg shadow-2xl transition ease-in duration-200 hover:-translate-y-2">
        <div className="w-full flex items-center justify-between p-2">
          <h3 className="text-sm md:text-md uppercase text-blue-800 font-bold my-2">
            {name}
          </h3>
          <span className="text-sm md:text-md text-gray-500"># {id}</span>
        </div>
        <img className="p-4 h-40 w-60" src={image} alt={name} />
        <div className=" w-full flex flex-col justify-center items-center rounded-b-lg p-2">
          <button
            className="my-2 bg-blue-800 w-full border rounded-lg p-2 hover:bg-blue-100 text-white hover:text-blue-600"
            onClick={handleDetails}
          >
            Detalhes
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
