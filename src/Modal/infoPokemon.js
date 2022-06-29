import React from "react";
import ReactDOM from "react-dom";
import PokemonInfo from "../components/PokemonInfo";
import './infoPokemon.css'

function InfoPokemon({ pokemonInformation }){
    return ReactDOM.createPortal(
        <div className="BackGroundPokemon">
            {/* <h2>{pokemonInformation.name}</h2> */}
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
           </div>
        </div>,
        document.getElementById('modalPokemon')
    );
}

// function InfoPokemon({ pokemonInformation }){
//     return(
//         <h3>{pokemonInformation.name}</h3>
//     )
// }

export {InfoPokemon}