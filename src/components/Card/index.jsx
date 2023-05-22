import React from "react";
import Link from "next/link";

const Card = ({ pokemon }) => {
  const { name, image, type } = pokemon;

  return (
    <Link href={`/pokemon/${name}`}>
      <div className="border flex flex-col items-center justify-center bg-blue-200 rounded-lg shadow-xl transition ease-in duration-200 hover:-translate-y-2">
        <img src={image} alt={name} width={160} />
        <div className="bg-blue-600 w-full flex flex-col justify-center items-center rounded-b-lg p-2">
          <h3 className="uppercase text-white my-2">{name}</h3>
          <button className="my-2 bg-blue-600 w-full border rounded-lg p-2 hover:bg-blue-200 text-white hover:text-blue-600">
            Ver Mais
          </button>
        </div>
        {/* <p>Type: {type.join(", ")}</p> */}
      </div>
    </Link>
  );
};

export default Card;
