import React, { useState } from "react";
import SearchInput from "../SearchInput";

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
  return (
    <div className="w-full h-full flex flex-col ">
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 my-4 ">
            {(searchResults.length > 0 ? searchResults : avistadosList).map(
              (avistado) => (
                <div
                  className="w-32 border flex flex-col items-center justify-between bg-blue-100 rounded-lg shadow-2xl p-2"
                  key={avistado.id}
                >
                  <h1 className="font-bold text-blue-800 uppercase text-sm md:text-md">
                    {avistado.name}
                  </h1>
                  <img className="w-24 md:w-32" src={avistado.image} />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-xl p-4 my-8 border shadow-xl">
        <h2 className="font-bold text-blue-800 text-lg md:text-xl mb-2">
          Favoritos:
        </h2>
        <div className="flex justify-center lg:justify-start ">
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 ">
            {favoritosList.map((favorito) => (
              <div
                className="w-48 md:w-56 min-h-full border flex flex-col items-center justify-between bg-blue-100 rounded-lg shadow-2xl p-2"
                key={favorito.id}
              >
                <h1 className="font-bold text-blue-800 uppercase text-md md:text-lg">
                  {favorito.name}
                </h1>
                <img className="w-24 md:w-32" src={favorito.image} />

                <div className="flex my-1">
                  {favorito.types.map((item, index) => (
                    <span
                      className="text-blue-600 font-bold bg-blue-200 text-sm md:text-md border rounded-md p-1 uppercase mx-2 cursor-pointer"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-between items-center">
                    <h3 className="text-blue-800 text-md md:text-lg font-bold">
                      Altura:
                    </h3>
                    <h3 className="text-blue-800 text-sm md:text-md ml-1">
                      {favorito.height * 10} cm
                    </h3>
                  </div>

                  <div className="flex justify-center items-center ml-2">
                    <h3 className="text-blue-800 text-md md:text-lg font-bold">
                      Peso:
                    </h3>
                    <h3 className="text-blue-800 text-sm md:text-md ml-1">
                      {favorito.weight / 10} kg
                    </h3>
                  </div>
                </div>

                <div className="flex justify-center  items-center">
                  <p className="text-justify text-blue-800 text-md md:text-lg w-32 break-words">
                    {favorito.observations}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
