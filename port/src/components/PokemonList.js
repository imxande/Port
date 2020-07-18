import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonList = () => {
  // state
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return <div>I am connected</div>;
};

export default PokemonList;
