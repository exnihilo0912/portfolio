import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from '../components/Card';
import List from '../components/List';
import Panel from '../components/Panel';
import Tabs from '../components/Tabs';

const pokeApiRootURL = 'https://pokeapi.co/api/v2';
const pokemonURL = `${pokeApiRootURL}/pokemon`;

async function fetchPokemonById(id) {
  const result = await fetch(`${pokemonURL}/${id}`);
  const pokemon = await result.json();
  return pokemon;
}

export async function loader({ params: { pokemonId } }) {
  return { pokemonId };
}

export default function PokemonDetailPage() {
  const { pokemonId } = useLoaderData();
  function usePokemon(pokemonId) {
    useEffect(() => {
      let ignore = false;

      async function startFetching() {
        const pokemon = await fetchPokemonById(pokemonId);
        if (!ignore) {
          setpokemon(pokemon);
        }
      }

      if (pokemonId) {
        startFetching();
      }

      return () => {
        ignore = true;
      };
    }, [pokemonId]);
    const [pokemon, setpokemon] = useState(null);

    return pokemon;
  }

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
        {/* <Card
          className="card--rounded"
          headerText={pokemon?.name}
          renderContent={() => (
            <>
              <div>
                {
                  pokemon
                    ? (<img
                        className="sprite" src={pokemon?.sprites.front_default}
                        alt="pokemon sprite"
                      />)
                    : <div className='sprite-placeholder'></div>
                }
              </div>
              <div>
                <List className="list list--horizontal">
                  {
                    pokemon?.types
                      .toSorted(({ slot: a }, { slot: b }) => a > b)
                      .map(({ type, slot }) => (
                        <li key={slot}>
                          <div className="tag">{type.name}</div>
                        </li>
                      ))
                  }
                </List>
              </div>
              <div>
                {
                  pokemon
                  && (
                    <List>
                      <li key="height">height: {parseInt(pokemon.height, 10) * 10} cm</li>
                      <li key="weight">weight: {parseInt(pokemon.weight, 10) / 10} kg</li>
                    </List>
                  )
                }
              </div>
              <div>
                {
                  pokemon
                    ? (
                      <List>
                        {pokemon?.stats.map(({ stat, base_stat, effort }) => (
                          <li key={stat.name}>
                            <p>{stat.name}: {base_stat}</p>
                          </li>
                        ))}
                      </List>
                    )
                    : (<p>No pokemon selected</p>)
                }
              </div>
              <div>
                <h3>Tab test</h3>
                <div>
                  <Tabs tabs={[
                    { id: 'about', header: 'About', content: <p>About that pokemon</p> },
                    { id: 'stats', header: 'Base Stats', content: <p>Pokemon base stats</p> },
                    { id: 'evolution', header: 'Evolution', content: <p>Pokemon's evolutions</p> },
                    { id: 'moves', header: 'Moves', content: <p>Pokemon's moves</p> },
                  ]}/>
                </div>
              </div>
            </>
          )}
        /> */}
      </section>
      <Panel isSection>
          <div>
            <div>
              <List className="list list--horizontal">
                {
                  pokemon?.types
                    .toSorted(({ slot: a }, { slot: b }) => a > b)
                    .map(({ type, slot }) => (
                      <li key={slot}>
                        <div className="tag">{type.name}</div>
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