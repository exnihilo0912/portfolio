import { useEffect, useState } from 'react';

const pokeApiRootURL = 'https://pokeapi.co/api/v2';
const pokemonURL = `${pokeApiRootURL}/pokemon`;

async function fetchPokemonById(id) {
  const result = await fetch(`${pokemonURL}/${id}`);
  const pokemon = await result.json();
  return pokemon;
}

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

  export default usePokemon;