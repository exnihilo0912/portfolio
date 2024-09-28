import './PokemonCard.css';

import usePokemon from '../../customHooks/usePokemon';
import Chip from '../Chip';
import Tag from '../Tag';

export default function PokemonCard({ id }) {
  const pokemon = usePokemon(id)

  return (
    <>
      {
        pokemon &&
        (
          <article
            className='pokemon-card'
            value={pokemon.id}
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
                      <li>
                        <Tag>
                          <Chip>〒</Chip>
                          <span style={{ textTransform: 'capitalize' }}>
                            {type.name}
                          </span>
                        </Tag>
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