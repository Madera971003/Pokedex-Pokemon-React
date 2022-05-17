import React from "react";
import { PokemonContext } from "./PokemonContex/indexContext";
import PokemonThumb from "./components/PokemonThumb";
import { SearchPokemon } from "./components/SearchPokemon";
import { InfoPokemon } from "./Modal/infoPokemon";
function App() {
  const {
    setSearchPokemons,
    searchedPokemons,
    getAllPokemons,
    onClickButtonOpenInfo,
    openInfo,
  } = React.useContext(PokemonContext);

  return [
    <h1 className="title-container">Pokemon Evolution</h1>,
    <SearchPokemon setSearchPokemons={setSearchPokemons}/>,
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {searchedPokemons.map( (pokemonStats, index) =>
            <button className = "button-info-pokemon" onClick={onClickButtonOpenInfo}>
              {openInfo && (
                <InfoPokemon/>
              )}
              <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />
            </button>
            )}
        </div>
      </div>
      <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
    </div>,
  ];
}

export default App;
