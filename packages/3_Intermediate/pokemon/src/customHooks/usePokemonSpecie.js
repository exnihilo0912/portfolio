import { useEffect, useState } from 'react';

const pokeApiRootURL = 'https://pokeapi.co/api/v2';
const pokemonURL = `${pokeApiRootURL}/pokemon-species/`;

async function fetchPokemonSpecieById(id) {
  const result = await fetch(`${pokemonURL}/${id}/`);
  const pokemon = await result.json();
  return pokemon;
}

function usePokemonSpecie(pokemonId) {
  const [pokemonSpecie, setPokemonSpecie] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const pokemonSpecie = await fetchPokemonSpecieById(pokemonId);
      if (!ignore) {
        setPokemonSpecie(pokemonSpecie);
      }
    }

    if (pokemonId) {
      startFetching();
    }

    return () => {
      ignore = true;
    };
  }, [pokemonId]);

  return pokemonSpecie;
}

export default usePokemonSpecie;