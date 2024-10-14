
import { useLoaderData } from 'react-router-dom';

import List from '../components/List';
import Panel from '../components/Panel';
import PokemonType from '../components/PokemonType';
import Tabs from '../components/Tabs';
import PokemonAbout from '../components/PokemonAbout';
import PokemonMoveList from '../components/PokemonMoveList';
import PokemonStats from '../components/PokemonStats';
import PokemonEvolutionTimeline from '../components/PokemonEvolutionTimeline';

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
          <div>
            <Tabs tabs={[
              { id: 'about', header: 'About', content: <PokemonAbout pokemon={pokemon}/> },
              { id: 'stats', header: 'Base Stats', content: <PokemonStats pokemon={pokemon} /> },
              { id: 'evolution', header: 'Evolution', content: <PokemonEvolutionTimeline pokemon={pokemon} /> },
              { id: 'moves', header: 'Moves', content: <PokemonMoveList pokemon={pokemon} /> },
            ]}/>
          </div>
      </Panel>
    </>
  );
}