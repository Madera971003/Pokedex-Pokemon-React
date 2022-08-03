import { Dispatch, SetStateAction } from "react";

export type Url = string | undefined;

export type AbilityInfo = {
    name: string | null | undefined,
    url: Url,
}

export type AbilityObject = {
    ability: AbilityInfo | undefined,
    is_hidden: boolean | undefined,
    slot: number | undefined,
}

export type PokemonData = {
    name: string,
    abilities: AbilityObject[] | undefined;
    base_experience: number | undefined,
    id: number,
    sprites: {
        other: {
            dream_world: {
                front_default: Url,
            }
        }
    },
    types: [
        {
            type: {
                name: string,
            }
        }
    ] 
}

export type PokemonBasicData = {
    name : string,
    url : string | undefined
}

export type Results = PokemonBasicData[] | null | undefined;

export type PokemonContextType = {
    setSearchPokemons: Dispatch<SetStateAction<string>>,
    searchedPokemons: PokemonData[],
    getAllPokemons: () => void,
    onClickButtonOpenInfo: () => void,
    openInfo: boolean,
    setOpenInfo: Dispatch<SetStateAction<boolean>>,
    allPokemons: PokemonData[],
    setAllPokemons: Dispatch<SetStateAction<PokemonData[]>>,
    loadMore: string,
    setLoadMore: Dispatch<SetStateAction<string>>,
    searchPokemons: string,
};

export type PropsApp = {
    setSearchPokemons: Dispatch<SetStateAction<string>>,
    searchedPokemons: PokemonData[],
    getAllPokemons: () => {},
    openInfo: boolean,
    setOpenInfo: Dispatch<SetStateAction<boolean>>,
} | undefined;

export type PokemonStats = {
    id: number | undefined | null,
    sprites: {
        other: {
            dream_world: {
                front_default: Url,
            }
        }
    }
    name: string,
    types: [
        {
            type: {
                name: string,
            }
        }
    ]
}
 export type PokemonThumbType = {
    id: number | null | undefined,
    name: string | undefined,
    image: Url,
    type: string | null | undefined,
 }