const PokemonInfo = ({ pokemon }) => {
  return (
    <div className="bg-white shadow-2xl rounded-xl my-10 w-48 md:w-96">
      <div className="flex flex-row items-center justify-between  p-2">
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-gray-500 text-sm md:text-md font-bold">
            # {pokemon.id}
          </h3>
          <h1 className="font-bold uppercase text-2xl text-blue-800 ">
            {pokemon.name}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center">
          {pokemon.types.map((item, index) => (
            <span
              className="text-blue-800 font-bold bg-blue-100 text-sm md:text-md border rounded-md p-1 uppercase mx-2 cursor-pointer my-1"
              key={index}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col ">
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-bold text-blue-800 text-lg md:text-xl">
              Altura
            </h1>
            {/* calculo para passar para cm. 
          The height of this Pokémon in decimetres. (info tirada da doc da API)
        */}
            <h3 className="text-gray-500 text-sm md:text-md">
              {pokemon.height * 10} cm
            </h3>
          </div>

          <div className="flex flex-col justify-center items-start my-1">
            <h1 className="font-bold text-blue-800 text-lg md:text-xl">Peso</h1>
            {/* calculo para passar pra kg.
          The weight of this Pokémon in hectograms. (info tirada da doc da API)
        */}
            <h3 className="text-gray-500 text-sm md:text-md">
              {pokemon.weight / 10} kg
            </h3>
          </div>
        </div>
        <img
          className="w-24 md:w-32"
          src={pokemon.sprites.other.home.front_default}
        />
      </div>
    </div>
  );
};

export default PokemonInfo;
