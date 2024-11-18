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

async function fetchAllPokemons() {
  let pokemonCount = 0;
  let nextPage = `${rootUrl}/pokemon/`;
  let shouldContinue = true;
  const pokemons = [];
  while (shouldContinue) {
    const response = await fetch(nextPage);
    const result = await response.json();
    if (!pokemonCount) {
      pokemonCount = result.count;
    }
    pokemons.push(...result.results);
    nextPage = result.next;
    if (pokemons.length >= pokemonCount) {
      shouldContinue = false;
    }
    console.log(`Fethcing next page: ${nextPage}`);
  }
  fs.writeFileSync(`${__dirname}/data/pokemons.js`, JSON.stringify(pokemons));
}

async function fetchPokemons(first = 1, last = 1025) {
  const pokemonIndexes = Array(last).fill(0).map((_, index) => index + 1).slice(first - 1);
  const pokemons = [];
  for (const pokemonIndex of pokemonIndexes) {
    console.log(`#${pokemonIndex}`);
    const result = await fetch(`${rootUrl}/pokemon/${pokemonIndex}`);
    const pokemon = await result.json();
    pokemons.push(pokemon);
    await delay(1);
  }
  fs.writeFileSync(`${__dirname}/data/pokemons.js`, JSON.stringify(pokemons));
}

fetchPokemons();