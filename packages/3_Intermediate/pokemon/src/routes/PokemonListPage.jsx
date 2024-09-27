import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <>
      <h1>Pokemon list page</h1>
      <section className="container container--centered">
        <ul className='card-list'>
          {pokemons.map(
            (pokemon, index) => (
              <li key={pokemon.id}>
                <Link to={`/pokemons/${pokemon.id}`}>
                  <article
                    className='card-list__item card--rounded'
                    key={pokemon.id}
                    value={pokemon.id}
                    checked={selectedPokemonId === pokemon.id}
                  >
                    {pokemon.name}
                  </article>
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
}