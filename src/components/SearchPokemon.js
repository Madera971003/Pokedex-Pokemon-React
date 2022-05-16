import React from 'react';
import '../styles/SearchPokemon.css';

function SearchPokemon({setSearchPokemons}) {
    const onSearchPokemons = (event) => {
      setSearchPokemons(event.target.value);
    };

    return (
      <input 
        className = "TodoSearch"
        placeholder="Search Pokemon"
        onChange={onSearchPokemons}
      />
    );
  }
  
  export { SearchPokemon };