import { useEffect, useState } from 'react';

const pokeApiRootURL = 'https://pokeapi.co/api/v2';
const pokemonURL = `${pokeApiRootURL}/pokemon`;
const pokemonListURL = `${pokemonURL}?limit=151&offset=0`

export default function PokemonListPage() {
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
  const pokemons = usePokemonList();
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const selectedPokemon = pokemons.find(({ id }) => Number(selectedPokemonId) === id);

  return (
    <main>
      <h1>Pokemon list page</h1>
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
    </main>
  );
}