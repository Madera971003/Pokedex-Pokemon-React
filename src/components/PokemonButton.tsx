import React from 'react';

function PokemonButton(props: { children: React.ReactElement<any, string>; }) {
  return (
    <React.Fragment >
        <button className = "button-info-pokemon">
            {props.children}
        </button>
    </React.Fragment>
  );
}

export { PokemonButton };