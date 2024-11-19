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

async function fetchAbilites(first = 1, last = 307) {
  const abilityIndexes = Array(last).fill(0).map((_, index) => index + 1).slice(first - 1);
  const abilities = [];
  for (const abilityIndex of abilityIndexes) {
    console.log(`Ability #${abilityIndex}`);
    const result = await fetch(`${rootUrl}/ability/${abilityIndex}`);
    const ability = await result.json();
    abilities.push(ability);
    await delay(1);
  }
  fs.writeFileSync(`${__dirname}/data/abilities.js`, JSON.stringify(abilities));
}

async function fetchBerries(first = 1, last = 64) {
  const berryIndexes = Array(last).fill(0).map((_, index) => index + 1).slice(first - 1);
  const berries = [];
  for (const berryIndex of berryIndexes) {
    console.log(`Berry #${berryIndex}`);
    const result = await fetch(`${rootUrl}/berry/${berryIndex}`);
    const berry = await result.json();
    berries.push(berry);
    await delay(1);
  }
  fs.writeFileSync(`${__dirname}/data/berries.js`, JSON.stringify(berries));
}

async function fetchBerryFirmness(first = 1, last = 5) {
  const berryFirmnessIndexes = Array(last).fill(0).map((_, index) => index + 1).slice(first - 1);
  const berryFirmnesses = [];
  for (const berryFirmnessIndex of berryFirmnessIndexes) {
    console.log(`Berry Firmness #${berryFirmnessIndex}`);
    const result = await fetch(`${rootUrl}/berry-firmness/${berryFirmnessIndex}`);
    const berryFirmness = await result.json();
    berryFirmnesses.push(berryFirmness);
    await delay(1);
  }
  fs.writeFileSync(`${__dirname}/data/berry-firmnesses.js`, JSON.stringify(berryFirmnesses));
}

async function fetchBerryFlavor(first = 1, last = 5) {
  const berryFlavorIndexes = Array(last).fill(0).map((_, index) => index + 1).slice(first - 1);
  const berryFlavors = [];
  for (const berryFlavorIndex of berryFlavorIndexes) {
    console.log(`Berry Flavor #${berryFlavorIndex}`);
    const result = await fetch(`${rootUrl}/berry-firmness/${berryFlavorIndex}`);
    const berryFlavor = await result.json();
    berryFlavors.push(berryFlavor);
    await delay(1);
  }
  fs.writeFileSync(`${__dirname}/data/berry-flavor.js`, JSON.stringify(berryFlavors));
}

async function fetchCharacteristics(first = 1, last = 30) {
  const characteristicIndexes = Array(last).fill(0).map((_, index) => index + 1).slice(first - 1);
  const characteristics = [];
  for (const characteristicIndex of characteristicIndexes) {
    console.log(`Characteristic #${characteristicIndex}`);
    const result = await fetch(`${rootUrl}/characteristic/${characteristicIndex}`);
    const characteristic = await result.json();
    characteristics.push(characteristic);
    await delay(1);
  }
  fs.writeFileSync(`${__dirname}/data/characteristic.js`, JSON.stringify(characteristics));
}

async function fetchEntities(first, last, entityName, entityUrlFragment) {
  const entityIndexes = Array(last).fill(0).map((_, index) => index + 1).slice(first - 1);
  const entities = [];
  for (const entityIndex of entityIndexes) {
    console.log(`${entityName} #${entityIndex}`);
    const result = await fetch(`${rootUrl}/${entityUrlFragment}/${entityIndex}`);
    const entity = await result.json();
    entities.push(entity);
    await delay(1);
  }
  fs.writeFileSync(`${__dirname}/data/${entityUrlFragment}.js`, JSON.stringify(entities));
}

// fetchPokemons();
// fetchAbilites();
// fetchBerries();
// fetchBerryFlavor();
// fetchCharacteristics();

// for (const entity of entities) {
//   fetchEntities(1, entity.last, entity.entityName, entity.entityUrlFragment);
// }

const entityUrlByName = {
  "ability": "https://pokeapi.co/api/v2/ability/",
  "berry": "https://pokeapi.co/api/v2/berry/",
  "berry-firmness": "https://pokeapi.co/api/v2/berry-firmness/",
  "berry-flavor": "https://pokeapi.co/api/v2/berry-flavor/",
  "characteristic": "https://pokeapi.co/api/v2/characteristic/",
  "contest-effect": "https://pokeapi.co/api/v2/contest-effect/",
  "contest-type": "https://pokeapi.co/api/v2/contest-type/",
  "egg-group": "https://pokeapi.co/api/v2/egg-group/",
  "encounter-condition": "https://pokeapi.co/api/v2/encounter-condition/",
  "encounter-condition-value": "https://pokeapi.co/api/v2/encounter-condition-value/",
  "encounter-method": "https://pokeapi.co/api/v2/encounter-method/",
  "evolution-chain": "https://pokeapi.co/api/v2/evolution-chain/",
  "evolution-trigger": "https://pokeapi.co/api/v2/evolution-trigger/",
  "gender": "https://pokeapi.co/api/v2/gender/",
  "generation": "https://pokeapi.co/api/v2/generation/",
  "growth-rate": "https://pokeapi.co/api/v2/growth-rate/",
  "item": "https://pokeapi.co/api/v2/item/",
  "item-attribute": "https://pokeapi.co/api/v2/item-attribute/",
  "item-category": "https://pokeapi.co/api/v2/item-category/",
  "item-fling-effect": "https://pokeapi.co/api/v2/item-fling-effect/",
  "item-pocket": "https://pokeapi.co/api/v2/item-pocket/",
  "language": "https://pokeapi.co/api/v2/language/",
  "location": "https://pokeapi.co/api/v2/location/",
  "location-area": "https://pokeapi.co/api/v2/location-area/",
  "machine": "https://pokeapi.co/api/v2/machine/",
  "move": "https://pokeapi.co/api/v2/move/",
  "move-ailment": "https://pokeapi.co/api/v2/move-ailment/",
  "move-battle-style": "https://pokeapi.co/api/v2/move-battle-style/",
  "move-category": "https://pokeapi.co/api/v2/move-category/",
  "move-damage-class": "https://pokeapi.co/api/v2/move-damage-class/",
  "move-learn-method": "https://pokeapi.co/api/v2/move-learn-method/",
  "move-target": "https://pokeapi.co/api/v2/move-target/",
  "nature": "https://pokeapi.co/api/v2/nature/",
  "pal-park-area": "https://pokeapi.co/api/v2/pal-park-area/",
  "pokeathlon-stat": "https://pokeapi.co/api/v2/pokeathlon-stat/",
  "pokedex": "https://pokeapi.co/api/v2/pokedex/",
  "pokemon": "https://pokeapi.co/api/v2/pokemon/",
  "pokemon-color": "https://pokeapi.co/api/v2/pokemon-color/",
  "pokemon-form": "https://pokeapi.co/api/v2/pokemon-form/",
  "pokemon-habitat": "https://pokeapi.co/api/v2/pokemon-habitat/",
  "pokemon-shape": "https://pokeapi.co/api/v2/pokemon-shape/",
  "pokemon-species": "https://pokeapi.co/api/v2/pokemon-species/",
  "region": "https://pokeapi.co/api/v2/region/",
  "stat": "https://pokeapi.co/api/v2/stat/",
  "super-contest-effect": "https://pokeapi.co/api/v2/super-contest-effect/",
  "type": "https://pokeapi.co/api/v2/type/",
  "version": "https://pokeapi.co/api/v2/version/",
  "version-group": "https://pokeapi.co/api/v2/version-group/",
};

async function fetchAll() {
  const entityObjs = [];
  let index = 0;

  for (const entityName in entityUrlByName) {
    const entityUrl = entityUrlByName[entityName];
    console.log(entityName);
    const result = await fetch(entityUrl);
    const { count, next, results } = await result.json();
    entityObjs[index] = {
      name: entityName,
      entityUrl,
      count,
      itemUrls: [...(results.map(({ url }) => url))],
    };

    let nextPage = next;
    while (nextPage) {
      console.log(`${entityName}:\t ${nextPage}`);
      const result = await fetch(nextPage);
      const { next, results } = await result.json();
      nextPage = next;
      entityObjs[index].itemUrls.push(...(results.map(({ url }) => url)));
      await delay(0.2);
    }

    index++;
    await delay(0.5);
  }

  console.log(entityObjs);
  fs.writeFileSync(`${__dirname}/data/allResources.json`, JSON.stringify(entityObjs));
}

fetchAll();