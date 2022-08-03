import React from 'react'
import { PokemonThumbType } from '../types/types';

export default function PokemonThumb({id, name, image, type}: PokemonThumbType) {
  //this is for the styles depending the pokemon type
  const style = type + " thumb-container";
  return (
    <div className={style}>
        <div className='number'>
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name}/>
        <div className='detail-wrapper'>
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </div>
    </div>
  )
};

export {PokemonThumb};