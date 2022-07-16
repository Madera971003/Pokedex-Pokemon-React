import React from 'react'

export default function PokemonInfo({id, name, image, type}) {
  let style;
  type ? style = type + " info-container" : style = "normal";

  return (
    <div className={style}>
        <div className='number'>
            <small className='text-pokemon-info'>#0{id}</small>
        </div>
        <img src={image} alt={name}/>
        <div className='detail-wrapper'>
            <h3 className='text-pokemon-info'>{name}</h3>
            <small className='text-pokemon-info'>Type: {type}</small>
        </div>
    </div>
  )
};

export {PokemonInfo};