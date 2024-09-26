import { useEffect, useSyncExternalStore, useState } from 'react';

import Card from './components/Card';
import List from './components/List';

// https://pokeapi.co/api/v2/pokemon/ditto
const pokeApiRootURL = 'https://pokeapi.co/api/v2';
const pokemonURL = `${pokeApiRootURL}/pokemon`;
const pokemonListURL = `${pokemonURL}?limit=151&offset=0`

async function fetchPokemonById(id) {
  const result = await fetch(`${pokemonURL}/${id}`);
  const pokemon = await result.json();
  return pokemon;
}

function usePokemonList() {
  useEffect(() => {
    async function getPokemons() {
      const response = await fetch(pokemonListURL);
      const { results } = await response.json();
      setPokemons(results.map((pokemon, index) => ({ id: index + 1, ...pokemon })));
    }
    getPokemons();
  }, []);
  // TODO put into hook
  const [pokemons, setPokemons] = useState([]);

  return pokemons;
}

function usePokemon(selectedPokemonId) {
  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const pokemon = await fetchPokemonById(selectedPokemonId);
      if (!ignore) {
        setCurrentPokemon(pokemon);
      }
    }

    if (selectedPokemonId) {
      startFetching();
    }

    return () => {
      ignore = true;
    };
  }, [selectedPokemonId]);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  return currentPokemon;
}

function App() {
  const pokemons = usePokemonList();
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const currentPokemon = usePokemon(selectedPokemonId);
  const selectedPokemon = pokemons.find(({ id }) => Number(selectedPokemonId) === id);

  return (
    <main className='page'>
      <h1>Pokedex</h1>
      <section className="container container--centered">
        <select
          placeholder="Select a pokemon"
          onChange={(event) => setSelectedPokemonId(event.target.value)}
        >
          {pokemons.map(
            (pokemon, index) => (
              <option
                key={pokemon.id}
                value={pokemon.id}
                checked={selectedPokemonId === pokemon.id}
              >
                {pokemon.name}
              </option>
            )
          )}
        </select>
      </section>
      <section className="container container--column container--centered">
        <h2>Selected Pokemon</h2>
        <Card
          className="card--rounded"
          headerText={selectedPokemon?.name}
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
                  selectedPokemon
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
            </>
          )}
        />
      </section>

    </main>
  );
}

export default App;
