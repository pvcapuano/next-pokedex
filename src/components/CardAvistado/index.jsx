import React from "react";

const CardAvistado = ({ avistado, onDelete }) => {
  const handleDelete = () => {
    onDelete(avistado.id);
  };

  return (
    <div className="w-32 border flex flex-col items-center justify-between bg-blue-100 rounded-lg shadow-2xl p-2">
      <h1 className="font-bold text-blue-800 uppercase text-sm md:text-md my-2">
        {avistado.name}
      </h1>
      <img className="w-24 md:w-32" src={avistado.image} />
      <button
        className="w-full bg-red-500 rounded-xl text-blue-100 p-1 hover:bg-blue-800 text-sm md:text-md my-2"
        onClick={handleDelete}
      >
        Remover
      </button>
    </div>
  );
};

export default CardAvistado;
