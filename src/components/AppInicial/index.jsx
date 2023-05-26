import React, { useState, useEffect } from "react";
import Pokedex from "../Pokedex";
import Dashboard from "../Dashboard";
import Button from "../Button";
import { useAuthContext } from "@/hooks/useAuthContext";
import useCollection from "@/hooks/useCollection";
import { useRouter } from "next/router";

const AppInicial = () => {
  const [showPokedex, setShowPokedex] = useState(false);
  const { user } = useAuthContext();
  const router = useRouter();
  const { documents: favoritos } = useCollection("favoritos", [
    "uid",
    "==",
    user.uid,
  ]);
  const { documents: avistados } = useCollection("avistados", [
    "uid",
    "==",
    user.uid,
  ]);

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
          <Pokedex favoritos={favoritos} avistados={avistados} />
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
