import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <Route exact path="/" component={PokemonList} />
    </div>
  );
}

export default App;
