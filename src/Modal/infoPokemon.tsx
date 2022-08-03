import React from "react";
import ReactDOM from "react-dom";
import PokemonInfo from "../components/PokemonInfo";
import { usePokemonContext } from "../PokemonContex/usePokemonContext";
import '../styles/infoPokemon.css'
import { PokemonStats } from "../types/types";

function InfoPokemon({ pokemonInformation }: {pokemonInformation: PokemonStats}){
    const {openInfo, setOpenInfo} = usePokemonContext();
    const handleClick = () => setOpenInfo(!openInfo);
    
    return ReactDOM.createPortal(
        <div className="BackGroundPokemon" onClick={handleClick}>
           <div className="box-content-pokemon-info">
            <div className="pokemon-modal-container">
                <PokemonInfo
                    key={pokemonInformation.id}
                    id={pokemonInformation.id}
                    image={pokemonInformation.sprites.other.dream_world.front_default}
                    name={pokemonInformation.name}
                    type={pokemonInformation.types[0].type.name}
                />
                <PokemonInfo
                    key={pokemonInformation.id}
                    id={pokemonInformation.id}
                    image={pokemonInformation.sprites.other.dream_world.front_default}
                    name={pokemonInformation.name}
                    type={pokemonInformation.types[0].type.name}
                />
                <PokemonInfo
                    key={pokemonInformation.id}
                    id={pokemonInformation.id}
                    image={pokemonInformation.sprites.other.dream_world.front_default}
                    name={pokemonInformation.name}
                    type={pokemonInformation.types[0].type.name}
                />
                <PokemonInfo
                    key={pokemonInformation.id}
                    id={pokemonInformation.id}
                    image={pokemonInformation.sprites.other.dream_world.front_default}
                    name={pokemonInformation.name}
                    type={pokemonInformation.types[0].type.name}
                />
            </div>
           </div>
        </div>,
        document.getElementById('modalPokemon')! // "!" this simbol is to say to TypeScript that I am sure that It is never null
    );
}

export {InfoPokemon}