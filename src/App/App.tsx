import React from "react";
import PokemonThumb from "../components/PokemonThumb";
import { SearchPokemon } from "../components/SearchPokemon";
import { InfoPokemon } from "../Modal/infoPokemon";
import { PokemonStats } from "../types/types";
import { usePokemonLogic } from "../Hooks/usePokemonLogic";


function App() {
  const {
    setSearchPokemons,
    searchedPokemons,
    getAllPokemons,
    openInfo,
    setOpenInfo,
  } = usePokemonLogic();
  const [pokemonInformation, setPokemonInformation] = React.useState<PokemonStats>({
    id: null,
    sprites: {
      other: {
        dream_world: {
          front_default: ""
        },
        home: {
          front_default: "",
          front_shiny: "",
        },
      },
      front_default: "",
      front_shiny: "",
    },
    name: "",
    types: [
      {
        type: {
          name: ""
        }
      }
    ],
  });

  const handleClick = (pokemonStats: PokemonStats) => {
    setOpenInfo(true);
    setPokemonInformation(pokemonStats);
  };
  return (
    <React.Fragment>
      <h1 className="title-container">Pokemon Evolution</h1>
      <SearchPokemon setSearchPokemons={setSearchPokemons}/>
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
            {searchedPokemons.map( (pokemonStats: PokemonStats, index: number) =>
              <div className="item" key={index}>
                <div onClick={() => handleClick(pokemonStats)}>
                  <PokemonThumb
                    key={pokemonStats.id}
                    id={pokemonStats.id}
                    image={pokemonStats.sprites.other.dream_world.front_default}
                    name={pokemonStats.name}
                    type={pokemonStats.types[0].type.name}
                  />
                </div>
              </div>
              )}
          </div>
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
      {openInfo && <InfoPokemon pokemonInformation={pokemonInformation}/>}
    </React.Fragment>
  );
}

export default App;