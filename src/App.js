import React, { useEffect, useState } from "react";
import PokemonThumb from "./components/PokemonThumb";
import { SearchPokemon } from "./components/SearchPokemon";

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    //In this part we get all pokemons from the API, the URL
    const res = await fetch(loadMore)
    //await works to wait a moment. It waits next called
    const data = await res.json()

    // console.log(allPokemons.length)
    // console.log(data.length)
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
    //console.log(data)
    createPokemonObject(data.results)
    //console.log(allPokemons)
  }
  //this will be execute when a variable in the array change
  useEffect(() => {
    getAllPokemons()
  }, [])

  // const [searchValue, setSearchValue] = React.useState('');
  // let pokemonsInfo = []
  // allPokemons.map((pokemon, index) => {
  //   pokemonsInfo = [
  //     {id: index, name: pokemon.name}
  //   ]
  // })
  // console.log(pokemonsInfo.name)

  return [
    <h1 className="title-container">Pokemon Evolution</h1>,
    <SearchPokemon
        namePokemon = "Hola"
    >
    </SearchPokemon>,
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
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
