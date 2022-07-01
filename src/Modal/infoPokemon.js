import React from "react";
import ReactDOM from "react-dom";
import PokemonInfo from "../components/PokemonInfo";
import { PokemonContext } from "../PokemonContex/indexContext";
import '../styles/infoPokemon.css'

function InfoPokemon({ pokemonInformation }){
    console.log('pokemonInformation', pokemonInformation)
    const {openInfo, setOpenInfo} = React.useContext(PokemonContext);
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
        document.getElementById('modalPokemon')
    );
}

export {InfoPokemon}