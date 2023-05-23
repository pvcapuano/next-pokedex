import React, { useState } from "react";
import Pokedex from "../Pokedex";
import Dashboard from "../Dashboard";

const AppInicial = () => {
  const [showPokedex, setShowPokedex] = useState(false);

  const handleToggleView = () => {
    setShowPokedex(!showPokedex);
  };

  return (
    <div>
      {showPokedex ? (
        <div className="flex flex-col justify-center items-center p-4">
          <div className="my-4 w-full ">
            <button
              className="w-20 text-center border rounded-xl p-2 bg-red-600 hover:bg-amber-500  font-bold text-md text-white"
              onClick={handleToggleView}
            >
              Voltar
            </button>
          </div>
          <Pokedex />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-4">
          <div className="my-4 w-full ">
            <button
              className=" text-center border rounded-xl p-2 bg-red-600 hover:bg-amber-500  font-bold text-md text-white"
              onClick={handleToggleView}
            >
              Ir para sua Pokedex
            </button>
          </div>
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default AppInicial;
