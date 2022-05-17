import React, { useEffect, useState } from "react";

const PokemonContext = React.createContext();

function PokemonProvider (props){

    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=50');
    const [searchPokemons, setSearchPokemons] = useState([]);
    const [openInfo, setOpenInfo] = useState(false);

    const onClickButtonOpenInfo = () => {
        setOpenInfo(!openInfo);
    }

    const getAllPokemons = async () => {
        //In this part we get all pokemons from the API, the URL
        const res = await fetch(loadMore);
        //await works to wait a moment. It waits next called
        const data = await res.json();

        setLoadMore(data.next)

        function createPokemonObject(result){
            result.forEach(async (pokemon) => {
                //In this line we get only 1 pokemon
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();

                setAllPokemons(currentList => [...currentList, data]);
                await allPokemons.sort((a, b) => a.id - b.id);
            });
        };
        createPokemonObject(data.results)
        //console.log(allPokemons)
    }
    //this will be execute when a variable in the array change
    useEffect(() => {
        getAllPokemons()
    },[])

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

    return(
        //Es necesario usar las dobles llaves, para enviar un objeto de JS
        <PokemonContext.Provider value={{
            setSearchPokemons,
            searchedPokemons,
            getAllPokemons,
            onClickButtonOpenInfo,
            openInfo,
            allPokemons,
            setAllPokemons,
            loadMore,
            setLoadMore,
            searchPokemons,
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export {PokemonContext, PokemonProvider}