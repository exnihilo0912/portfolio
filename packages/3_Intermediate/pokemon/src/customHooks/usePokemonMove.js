import { useEffect, useState } from 'react';

const pokeApiRootURL = 'https://pokeapi.co/api/v2';
const pokemonMoveURL = `${pokeApiRootURL}/move"`;

async function fetchPokemonById(id) {
  const result = await fetch(`${pokemonMoveURL}/${id}`);
  const pokemonMove = await result.json();
  return pokemonMove;
}

function usePokemonMove(pokemonMoveId) {
  const [pokemonMove, setPokemonMove] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const pokemonMove = await fetchPokemonById(pokemonMoveId);
      if (!ignore) {
        setPokemonMove(pokemonMove);
      }
    }

    if (pokemonMoveId) {
      startFetching();
    }

    return () => {
      ignore = true;
    };
  }, [pokemonMoveId]);

  return pokemonMove;
}

export default usePokemonMove;