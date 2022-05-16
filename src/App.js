import React, { useEffect, useState } from "react";
import PokemonThumb from "./components/PokemonThumb";
import { SearchPokemon } from "./components/SearchPokemon";

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=50')
  const [searchPokemons, setSearchPokemons] = useState([])

  const getAllPokemons = async () => {
    //In this part we get all pokemons from the API, the URL
    const res = await fetch(loadMore)
    //await works to wait a moment. It waits next called
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(result){
      result.forEach(async (pokemon) => {
        //In this line we get only 1 pokemon
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
    console.log(allPokemons)
  }
  //this will be execute when a variable in the array change
  useEffect(() => {
    getAllPokemons()
  }, [])

  let searchedPokemons = [];
  //This is a condition to filter pokemons in the search box
  if (!searchPokemons.length >= 1){
      searchedPokemons = allPokemons;
  }else{

    const searchText = searchPokemons.toLowerCase();
    searchedPokemons = allPokemons.filter(function(pokemon){
      return pokemon.name.includes(searchText)
    })
    //console.log(searchedPokemons)
  }

  return [
    <h1 className="title-container">Pokemon Evolution</h1>,
    <SearchPokemon setSearchPokemons={setSearchPokemons}/>,
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {searchedPokemons.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
        </div>
          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  ];
}

export default App;
