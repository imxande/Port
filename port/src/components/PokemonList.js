import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  // state
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      .then((response) => setPokemon(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {pokemon.map((poke) => {
        return <PokemonCard name={poke.name} />;
      })}
    </div>
  );
};

export default PokemonList;
