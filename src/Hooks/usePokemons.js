import { useState } from "react";
import { usePokemonsAPI } from "../api/PokemonsAPI";

export function usePokemons() {
    const [searchPokemons, setSearchPokemons] = useState([]);
    const {allPokemons, getAllPokemons} = usePokemonsAPI();
    let searchedPokemons = [];

    if (!searchPokemons.length >= 1){
        searchedPokemons = allPokemons;
    }else{

        const searchText = searchPokemons.toLowerCase();
        searchedPokemons = allPokemons.filter(function(pokemon){
        return pokemon.name.includes(searchText)
        })
    }

    return{
        setSearchPokemons,
        searchedPokemons,
        getAllPokemons,
        searchPokemons,
    }
}
