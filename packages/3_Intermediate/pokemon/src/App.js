import { useEffect, useState } from 'react';

import List from './components/List';

// https://pokeapi.co/api/v2/pokemon/ditto
const pokeApiRootURL = 'https://pokeapi.co/api/v2/';
const pokemonURL = `${pokeApiRootURL}/pokemon`;
const pokemonListURL = `${pokeApiRootURL}/pokemon?limit=151&offset=0`

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      const response = await fetch(pokemonListURL);
      const { results } = await response.json();
      setPokemons(results);
    }

    getPokemons();
  }, []);


  return (
    <main>
      <h1>Pokedex</h1>
      <section>
        <p>Selected pokemon</p>
        <article>
          {selectedPokemon}
        </article>
      </section>
      <section>
        <article>
          <List>
            {pokemons.map(({ name }) => (<li key={name}>{name}</li>))}
          </List>
        </article>
      </section>
    </main>
  );
}

export default App;
