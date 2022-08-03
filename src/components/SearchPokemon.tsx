import React, { Dispatch, SetStateAction } from 'react';
import '../styles/SearchPokemon.css';

function SearchPokemon({setSearchPokemons}: {setSearchPokemons: Dispatch<SetStateAction<string>>}) {
    const onSearchPokemons = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSearchPokemons(event.target.value);
    };

    return (
      <input 
        className = "PokemonSearch"
        placeholder="Search Pokemon"
        onChange={onSearchPokemons}
      />
    );
  }
  
  export { SearchPokemon };