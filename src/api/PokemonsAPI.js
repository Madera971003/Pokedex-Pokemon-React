import axios from "axios";
import { useState, useEffect } from "react";

const POKE_API = "https://pokeapi.co/api/v2/pokemon?limit=20";


export function usePokemonsAPI() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(POKE_API);

  useEffect(() => {
    getAllPokemons()
  }, [])
  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next)

    const createPokemonObject = (result) => {
        result.forEach(async (pokemon) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const data = await res.json();
            setAllPokemons(currentList => [...currentList, data]);
            await allPokemons.sort((a, b) => a.id - b.id);
        });
    };
    createPokemonObject(data.results)
  }
  return {
    allPokemons,
    getAllPokemons,
    loadMore,
    setLoadMore
  }
}