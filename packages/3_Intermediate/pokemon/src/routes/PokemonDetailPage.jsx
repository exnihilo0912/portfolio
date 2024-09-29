
import { useLoaderData } from 'react-router-dom';

import List from '../components/List';
import Panel from '../components/Panel';
import PokemonType from '../components/PokemonType';
import Tabs from '../components/Tabs';

import usePokemon from '../customHooks/usePokemon';

export async function loader({ params: { pokemonId } }) {
  return { pokemonId };
}

export default function PokemonDetailPage() {
  const { pokemonId } = useLoaderData();
  const pokemon = usePokemon(pokemonId);

  return (
    <>
      <section className="container" style={{ padding: '0 1rem 0 1rem'}}>
        <h1>{pokemon?.name}</h1>
        <div className="main-image-container">
          {
            pokemon
              ? (<img
                  className="sprite" src={pokemon?.sprites.front_default}
                  alt="pokemon sprite"
                />)
              : <div className='sprite-placeholder'></div>
          }
        </div>
      </section>
      <Panel isSection>
          <div>
            <div>
              <List className="list">
                {
                  pokemon?.types
                    .toSorted(({ slot: a }, { slot: b }) => a > b)
                    .map(({ type, slot }) => (
                      <li key={type.name}>
                        <PokemonType type={type.name} />
                      </li>
                    ))
                }
              </List>
            </div>
          </div>
          <h3>Tab test</h3>
          <div>
            <Tabs tabs={[
              { id: 'about', header: 'About', content: <p>About that pokemon</p> },
              { id: 'stats', header: 'Base Stats', content: <p>Pokemon base stats</p> },
              { id: 'evolution', header: 'Evolution', content: <p>Pokemon's evolutions</p> },
              { id: 'moves', header: 'Moves', content: <p>Pokemon's moves</p> },
            ]}/>
          </div>
        </Panel>
    </>
  );
}