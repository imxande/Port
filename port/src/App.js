import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import Home from "./components/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
