import React, { useState } from "react";
import Pokedex from "../Pokedex";
import Dashboard from "../Dashboard";
import Button from "../Button";

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
            <Button onClick={handleToggleView} text="Voltar" />
          </div>
          <Pokedex />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-4">
          <div className="my-4 w-full ">
            <Button onClick={handleToggleView} text="Ir para sua Pokedex" />
          </div>
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default AppInicial;
