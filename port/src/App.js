import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div>
      <header>
        <PokemonList />
      </header>
    </div>
  );
}

export default App;
