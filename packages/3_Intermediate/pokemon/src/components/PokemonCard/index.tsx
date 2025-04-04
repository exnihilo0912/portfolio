import React from 'react';

import './PokemonCard.css';

import usePokemon from '../../customHooks/usePokemon.js';
import PokemonType, { typeDetailByTypeName } from '../PokemonType/index.tsx';

interface PokemonCardProps {
  id: number;
}

interface PokemonType {
  type: { name: string; };
}

interface PokemonSprites {
  front_default: string;
}

interface PokemonData {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: Array<PokemonType>;
}

export default function PokemonCard({ id }: PokemonCardProps) {
  const pokemon: PokemonData = usePokemon(id);

  return (
    <>
      {
        pokemon &&
        (
          <article
            className='pokemon-card'
            style={{ background: typeDetailByTypeName[pokemon?.types?.[0]?.type?.name]?.backgroundColor }}
          >
            <header className='pokemon-card__header'>
              <span>{pokemon.name}</span>
              <span>#{String(pokemon.id).padStart(3, '0')}</span>
            </header>
            <div className='pokemon-card__body'>
              <div>
                <ul>
                  {
                    pokemon.types.map(({ type }) => (
                      <li key={type.name} style={{ marginBottom: '0.2rem' }}>
                        <PokemonType type={type.name} />
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='pokemon-card__sprite-container'>
                <img className='pokemon-card__sprite' src={pokemon?.sprites.front_default} alt={pokemon.name} />
              </div>
            </div>
          </article>
        )
      }
    </>
  );
}