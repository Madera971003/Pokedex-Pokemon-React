import React from "react";
import { PokemonContext } from "./PokemonContex/indexContext";
import PokemonThumb from "./components/PokemonThumb";
import { SearchPokemon } from "./components/SearchPokemon";
import { InfoPokemon } from "./Modal/infoPokemon";
import { PokemonButton } from "./components/PokemonButton";


function App() {
  const {
    setSearchPokemons,
    searchedPokemons,
    getAllPokemons,
  } = React.useContext(PokemonContext);
  const [open, setOpen] = React.useState(false);
  const [pokemonInformation, setPokemonInformation] = React.useState({});

  const handleClick = (pokemonStats) => {
    setOpen(true);
    setPokemonInformation(pokemonStats)
  };
  return (
    <React.Fragment>
      <h1 className="title-container">Pokemon Evolution</h1>
      <SearchPokemon setSearchPokemons={setSearchPokemons}/>
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
            {searchedPokemons.map( (pokemonStats, index) =>
              <div className="item" key={index}>
                <div onClick={() => handleClick(pokemonStats)}>
                  <PokemonButton>
                    <PokemonThumb
                      key={index}
                      id={pokemonStats.id}
                      image={pokemonStats.sprites.other.dream_world.front_default}
                      name={pokemonStats.name}
                      type={pokemonStats.types[0].type.name}
                    />
                  </PokemonButton>
                </div>
              </div>
              )}
          </div>
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
      {open && <InfoPokemon pokemonInformation={pokemonInformation}/>}
    </React.Fragment>
  );
}

export default App;