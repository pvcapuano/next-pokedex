import Button from "@/components/Button";
import React, { useState } from "react";
import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "@/hooks/useAuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Pokemon = ({ pokemon }) => {
  const [obsText, setObsTex] = useState("");
  const { user } = useAuthContext();
  const router = useRouter();

  const handleOnChangeObsArea = (event) => {
    setObsTex(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "favoritos");

    await addDoc(ref, {
      name: pokemon.name,
      image: pokemon.sprites.other.home.front_default,
      id: pokemon.id,
      types: pokemon.types.map((item) => item.type.name),
      height: pokemon.height,
      weight: pokemon.weight,
      observations: obsText,
      uid: user.uid,
    });

    setObsTex("");
    toast.success(`Parabéns! Você capturou o ${pokemon.name}!`, {
      theme: "colored",
    });
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="font-bold uppercase text-2xl border p-4 bg-blue-200 text-blue-600 mt-4">
          {pokemon.name}
        </h1>
        <img
          className="w-52 md:w-72 shadow-2xl"
          src={pokemon.sprites.other.home.front_default}
        />

        <div className="flex flex-col justify-center items-center mt-4 mb-1">
          <h1 className="font-bold text-red-600 text-xl md:text-2xl">
            Numero:
          </h1>
          <h3 className="text-blue-200 text-sm md:text-md"># {pokemon.id}</h3>
        </div>

        <div className="flex flex-col justify-center items-center my-1">
          <h1 className="font-bold text-red-600 text-xl md:text-2xl">Tipo:</h1>
          <div className="my-1">
            {pokemon.types.map((item, index) => (
              <span
                className="text-blue-600 font-bold bg-blue-200 text-sm md:text-md border rounded-md p-1 uppercase mx-2 cursor-pointer"
                key={index}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-1">
          <h1 className="font-bold text-red-600 text-xl md:text-2xl">
            Altura:
          </h1>
          {/* calculo para passar para cm. 
          The height of this Pokémon in decimetres. (info tirada da doc da API)
        */}
          <h3 className="text-blue-200 text-sm md:text-md">
            {pokemon.height * 10} cm
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center my-1">
          <h1 className="font-bold text-red-600 text-xl md:text-2xl">Peso:</h1>
          {/* calculo para passar pra kg.
          The weight of this Pokémon in hectograms. (info tirada da doc da API)
        */}
          <h3 className="text-blue-200 text-sm md:text-md">
            {pokemon.weight / 10} kg
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center my-1 ">
          <h1 className="font-bold text-red-600 text-xl md:text-2xl">
            Observações:
          </h1>
          <textarea
            name="observations"
            placeholder="Faça suas anotações sobre o pokemon!"
            rows="6"
            cols="35"
            maxLength="200"
            className="my-2 md:p-2 p-1"
            onChange={handleOnChangeObsArea}
            value={obsText}
          ></textarea>
          <div className="w-full flex flex-col items-end">
            <span className="flex items-end text-blue-200">
              {obsText.length}/200
            </span>
          </div>
        </div>

        <div className="mb-8">
          <Button text="Capturar" />
        </div>
      </div>
    </form>
  );
};

export default Pokemon;

export const getStaticPaths = async () => {
  const maxPokemons = 150;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};
