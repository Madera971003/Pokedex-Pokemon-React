import React from 'react';
import '../styles/SearchPokemon.css';

function SearchPokemon({namePokemon}) {
    // const onSearchValueChange = (event) => {
    //   setSearchValue(event.target.value);
    // };
    //console.log({namePokemon});
    return (
      <input 
        className="TodoSearch"
        placeholder="Search Pokemon"
      />
    );
  }
  
  export { SearchPokemon };