import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import Home from "./components/Home";
import Navegation from "./components/Navegation";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navegation />
      <Route exact path="/" component={Home} />
      <Route path="/list" component={PokemonList} />
    </div>
  );
}

export default App;
