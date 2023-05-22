import React, { useState, useEffect } from "react";

const useFetchPokemons = (currentPage, limit) => {
  const [pokemons, setPokemons] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const offset = (currentPage - 1) * limit;
        const api = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

        const response = await fetch(api);
        const data = await response.json();

        const pokemonPromises = data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();

          const { name, sprites, types } = pokemonData;
          const image = sprites.front_default;
          const type = types.map((type) => type.type.name);

          return { name, image, type };
        });

        const pokemonList = await Promise.all(pokemonPromises);
        setPokemons(pokemonList);

        const totalCount = data.count;
        const totalPages = Math.ceil(totalCount / limit);
        setTotalPages(totalPages);
      } catch (error) {
        console.log("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, [currentPage, limit]);

  return { pokemons, totalPages };
};

export default useFetchPokemons;
