import React, { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import PokemonInfo from "../components/PokemonInfo";
import '../styles/infoPokemon.css'
import { PokemonStats } from "../types/types";

function InfoPokemon({pokemonInformation, setOpenInfo} : {pokemonInformation: PokemonStats, setOpenInfo: Dispatch<SetStateAction<boolean>>}) {
    const handleClick = () => {
        setOpenInfo(false);
    };
    
    return ReactDOM.createPortal(
        <div className="BackGroundPokemon" onClick={handleClick}>
           <div className="box-content-pokemon-info">
           <button className="button-close-info" onClick={handleClick}><span>X</span></button>
            <div className="pokemon-modal-container">
                <PokemonInfo
                    id={pokemonInformation.id}
                    image={pokemonInformation.sprites.other.home.front_default}
                    name={pokemonInformation.name}
                    type={pokemonInformation.types[0].type.name}
                />
                <PokemonInfo
                    id={pokemonInformation.id}
                    image={pokemonInformation.sprites.other.home.front_shiny}
                    name={`${pokemonInformation.name} shiny`}
                    type={pokemonInformation.types[0].type.name}
                />
                <PokemonInfo
                    id={pokemonInformation.id}
                    image={pokemonInformation.sprites.front_default}
                    name={pokemonInformation.name}
                    type={pokemonInformation.types[0].type.name}
                />
                <PokemonInfo
                    id={pokemonInformation.id}
                    image={pokemonInformation.sprites.front_shiny}
                    name={`${pokemonInformation.name} shiny`}
                    type={pokemonInformation.types[0].type.name}
                />
            </div>
           </div>
        </div>,
        document.getElementById('modalPokemon')! // "!" this simbol is to say to TypeScript that I am sure that It is never null
    );
}

export {InfoPokemon}