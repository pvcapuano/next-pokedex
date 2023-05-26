import useDeletePokemon from "@/hooks/useDeletePokemon";
import React, { useState } from "react";
import SearchInput from "../SearchInput";
import CardAvistado from "../CardAvistado";
import CardFavorito from "../CardFavorito";

const Pokedex = ({ favoritos, avistados }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [valorDaPesquisa, setValorDaPesquisa] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();

    const filteredAvistados = avistados.filter((avistado) =>
      avistado.name.toLowerCase().includes(value)
    );

    const filteredFavoritos = favoritos.filter((favorito) =>
      favorito.name.toLowerCase().includes(value)
    );

    setSearchResults([...filteredAvistados, ...filteredFavoritos]);
  };

  const avistadosList = searchResults.length > 0 ? searchResults : avistados;
  const favoritosList = favoritos.filter((favorito) =>
    favorito.name.toLowerCase().includes(valorDaPesquisa.toLowerCase())
  );

  const { handleDeleteAvi, handleDeleteFav } = useDeletePokemon();

  return (
    <div className="w-full h-full flex flex-col">
      <SearchInput
        value={valorDaPesquisa}
        handleSearch={handleSearch}
        setValorDaPesquisa={setValorDaPesquisa}
      />

      <div className="flex flex-col bg-white rounded-xl p-4 shadow-xl">
        <h2 className="font-bold text-blue-800 text-lg md:text-xl mb-2">
          Avistados:
        </h2>
        <div className="flex justify-center md:justify-start">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 my-4">
            {avistadosList.map((avistado) => (
              <CardAvistado
                avistado={avistado}
                onDelete={handleDeleteAvi}
                key={avistado.id}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-xl p-4 my-8 border shadow-xl">
        <h2 className="font-bold text-blue-800 text-lg md:text-xl mb-2">
          Favoritos:
        </h2>
        <div className="flex justify-center lg:justify-start">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            {favoritosList.map((favorito) => (
              <CardFavorito
                favorito={favorito}
                onDelete={handleDeleteFav}
                key={favorito.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
