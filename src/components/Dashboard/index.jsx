import React, { useEffect, useState } from "react";
import useFetchPokemons from "./hook/useFetchPokemons";
import Card from "../Card";

const Dashboard = () => {
  const limit = 10; // Número de Pokémon por página
  const maxPages = 15; // Número máximo de páginas
  const [currentPage, setCurrentPage] = useState(1);
  const { pokemons, totalPages } = useFetchPokemons(currentPage, limit);

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

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>chegou no dashboard</h1>

      {console.log(pokemons)}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 my-3">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
      </div>

      <div className="w-1/5 flex justify-between text-white p-2">
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

/* export async function getStaticProps() {
  const maxPokemons = 151;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
} */
