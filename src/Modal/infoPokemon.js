import React from "react";
import ReactDOM from "react-dom";
import './infoPokemon.css'

function InfoPokemon(){
    return ReactDOM.createPortal(
        <div className="BackGroundPokemon">
        </div>,
        document.getElementById('modal_pokemon')
    );
}

export {InfoPokemon}