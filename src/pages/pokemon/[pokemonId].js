import React, { useState } from "react";
import { db } from "@/config/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useAuthContext } from "@/hooks/useAuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import ObservationsTextArea from "@/components/ObservationsTextArea";
import PokemonInfo from "@/components/PokemonInfo";

const Pokemon = ({ pokemon }) => {
  const [obsText, setObsTex] = useState("");
  const { user } = useAuthContext();
  const router = useRouter();

  const handleOnChangeObsArea = (event) => {
    setObsTex(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const favoritosRef = collection(db, "favoritos");
    const querySnapshot = await getDocs(
      query(
        favoritosRef,
        where("uid", "==", user.uid),
        where("id", "==", pokemon.id)
      )
    );

    if (querySnapshot.empty) {
      await addDoc(favoritosRef, {
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
    } else {
      toast.error(`${pokemon.name} já foi adicionado à lista de favoritos.`, {
        theme: "colored",
      });
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center h-full"
      onSubmit={handleSubmit}
    >
      <PokemonInfo pokemon={pokemon} />

      <ObservationsTextArea
        obsText={obsText}
        handleOnChangeObsArea={handleOnChangeObsArea}
      />
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
