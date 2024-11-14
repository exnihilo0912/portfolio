const fs = require('fs');

const rootUrl = 'https://pokeapi.co/api/v2/';
const routes = [
  { urlFragment: 'pokemon/', name: 'pokemon' },
];

async function delay(seconds) {
  return new Promise((r) => {
    setTimeout(r, seconds * 1000);
  });
}

async function fetchPokemons(first = 1, last = 251) {
  const pokemonIndexes = Array(last).fill(0).map((_, index) => index + 1).slice(first - 1);
  const pokemons = [];
  for (const pokemonIndex of pokemonIndexes) {
    console.log(`#${pokemonIndex}`);
    const result = await fetch(`${rootUrl}/pokemon/${pokemonIndex}`);
    const pokemon = await result.json();
    pokemons.push(pokemon);
    await delay(3);
  }
  fs.writeFileSync(`${__dirname}/data/pokemons.js`, JSON.stringify(pokemons));
}

fetchPokemons(1, 1);