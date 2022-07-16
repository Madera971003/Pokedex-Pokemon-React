import React, { useState } from "react";
import { usePokemons } from "./Hooks/usePokemons";
import PokemonThumb from "./components/PokemonThumb";
import { SearchPokemon } from "./components/SearchPokemon";
import { InfoPokemon } from "./Modal/infoPokemon";
import { getAbilities } from "./api/AbilitiesAPI";

function App() {
  const {
    setSearchPokemons,
    searchedPokemons,
    getAllPokemons,
  } = usePokemons();
  const [openInfo, setOpenInfo] = useState(false);
  const [pokemonInformation, setPokemonInformation] = useState({});
  const [abilities, setAbilities] = useState([]);

  const handleClick = (pokemonStats) => {
    setAbilities([])
    setOpenInfo(true);
    setPokemonInformation(pokemonStats)
    pokemonStats.abilities.map((ability) => {
      getAbilities(ability.ability.url)
        .then( ability => {
          setAbilities(prevAbilities => prevAbilities.concat(ability))
        })
    })
  };
  console.log('abilities', abilities)
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
      {openInfo && <InfoPokemon pokemonInformation={pokemonInformation} setOpenInfo={setOpenInfo}/>}
    </React.Fragment>
  );
}

export default App;