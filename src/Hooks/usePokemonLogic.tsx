import { useEffect, useState } from "react";
import { PokemonBasicData, PokemonContextType, PokemonData, Results } from '../types/types'

export function usePokemonLogic(): PokemonContextType {

    const [allPokemons, setAllPokemons] = useState<PokemonData[]>([]);
    const [loadMore, setLoadMore] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=20');
    const [searchPokemons, setSearchPokemons] = useState<string>("");
    const [openInfo, setOpenInfo] = useState<boolean>(false);

    const onClickButtonOpenInfo = () => {
        setOpenInfo(!openInfo);
    }

    const getAllPokemons = async () => {
        //In this part we get all pokemons from the API, the URL
        const res = await fetch(loadMore);
        //await works to wait a moment. It waits next called
        const data = await res.json();

        setLoadMore(data.next)

        function createPokemonObject(result: Results) {
            result?.forEach(async (pokemon: PokemonBasicData) => {
                //In this line we get only 1 pokemon
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();

                setAllPokemons(currentList => [...currentList, data]);
                await allPokemons.sort((a, b) => a.id - b.id);
            });
        };
        createPokemonObject(data.results);
    }
    //this will be execute when a variable in the array change
    useEffect(() => {
        getAllPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let searchedPokemons: PokemonData[] = [];
    //This is a condition to filter pokemons in the search box
    if (searchPokemons.length === 0) {
        searchedPokemons = allPokemons;
    } else {

        const searchText = searchPokemons.toLowerCase();
        searchedPokemons = allPokemons.filter(function (pokemon) {
            return pokemon.name.includes(searchText)
        })
    }

    return ({
        setSearchPokemons,
        searchedPokemons,
        getAllPokemons,
        onClickButtonOpenInfo,
        openInfo,
        setOpenInfo,
        allPokemons,
        setAllPokemons,
        loadMore,
        setLoadMore,
        searchPokemons,
    })
}
