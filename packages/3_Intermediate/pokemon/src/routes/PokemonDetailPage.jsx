import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from '../components/Card';
import List from '../components/List';
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
          setCurrentPokemon(pokemon);
        }
      }

      if (pokemonId) {
        startFetching();
      }

      return () => {
        ignore = true;
      };
    }, [pokemonId]);
    const [currentPokemon, setCurrentPokemon] = useState(null);

    return currentPokemon;
  }

  const currentPokemon = usePokemon(pokemonId);

  return (
    <>
      <a href='/pokemons'>pokedex</a>
      <h1>Pokedex</h1>
      <section className="container container--column container--centered">
        <h2>Selected Pokemon</h2>
        <Card
          className="card--rounded"
          headerText={currentPokemon?.name}
          renderContent={() => (
            <>
              <div>
                {
                  currentPokemon
                    ? (<img
                        className="sprite" src={currentPokemon?.sprites.front_default}
                        alt="pokemon sprite"
                      />)
                    : <div className='sprite-placeholder'></div>
                }
              </div>
              <div>
                <List className="list list--horizontal">
                  {
                    currentPokemon?.types
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
                  currentPokemon
                  && (
                    <List>
                      <li key="height">height: {parseInt(currentPokemon.height, 10) * 10} cm</li>
                      <li key="weight">weight: {parseInt(currentPokemon.weight, 10) / 10} kg</li>
                    </List>
                  )
                }
              </div>
              <div>
                {
                  currentPokemon
                    ? (
                      <List>
                        {currentPokemon?.stats.map(({ stat, base_stat, effort }) => (
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
        />
      </section>
    </>
  );
}