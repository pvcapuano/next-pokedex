import React, { useEffect, useState } from "react";
import useFetchPokemons from "./hook/useFetchPokemons";
import Card from "../Card";
import { toast } from "react-toastify";
import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "@/hooks/useAuthContext";

const Dashboard = () => {
  const limit = 10; // Número de Pokémon por página
  const maxPages = 15; // Número máximo de páginas
  const [currentPage, setCurrentPage] = useState(1);
  const { pokemons, totalPages } = useFetchPokemons(currentPage, limit);
  const { user } = useAuthContext();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage <= totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = async (pokemon) => {
    const ref = collection(db, "avistados");

    await addDoc(ref, {
      name: pokemon.name,
      image: pokemon.image,
      id: pokemon.id,
      uid: user.uid,
    });

    toast.warn(`Voce avistou o ${pokemon.name}! Vamos capturá-lo?`, {
      theme: "colored",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-3">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            handleSubmit={handleSubmit}
          />
        ))}
      </div>

      <div className="w-3/5 md:w-2/5 lg:w-1/5 flex justify-between text-white p-2">
        <button
          className="flex items-center justify-center"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          {"<<"} Anterior
        </button>
        {currentPage}
        <button
          onClick={handleNextPage}
          disabled={currentPage === maxPages || currentPage === totalPages}
          className="flex items-center justify-center"
        >
          Próximo {">>"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
