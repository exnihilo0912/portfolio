import { useEffect, useState } from 'react';

import FilterableMenuList, { MenuListItem } from '../components/FilterableMenuList';
import PageTitle from '../components/PageTitle';
import PageSection from '../components/PageSection';
import PokemonCard from '../components/PokemonCard';

const pokeApiRootURL = 'https://pokeapi.co/api/v2';
const pokemonURL = `${pokeApiRootURL}/pokemon`;
const pokemonListURL = `${pokemonURL}?limit=151&offset=0`

export default function PokemonListPage() {
  // TODO Put in provider + combined
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
// ----------------------
  return (
    <>
      <PageSection background="white">
        <PageTitle>Pokedex</PageTitle>
        <p>Use the advanced searchto find Pokemon by type, weakness, ability and more!</p>
        <section className="container container--centered">
          <FilterableMenuList
            items={pokemons}
            renderItem={(pokemon) => (
              <MenuListItem key={pokemon.id} to={`/pokemons/${pokemon.id}`}>
                <PokemonCard id={pokemon.id} />
              </MenuListItem>
            )}
            onFilterItems={(query, pokemon) => (
              pokemon.name.toLowerCase().startsWith(query.toLowerCase())
            )}
          />
        </section>
      </PageSection>
    </>
  );
}