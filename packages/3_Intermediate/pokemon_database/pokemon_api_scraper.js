const fs = require('fs');

async function delay(seconds) {
  return new Promise((r) => {
    setTimeout(r, seconds * 1000);
  });
}

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

// fetchAll();

async function fetchAllEntities() {
  const allResources = require('./data/allResources.json');
  for (const resource of allResources) {
    const { name, count, itemUrls } = resource;
    console.log({
      name,
      itemUrls,
    });

    const entities = [];
    for (const itemUrl of itemUrls) {
      const result = await fetch(itemUrl);
      const entity = await result.json();
      console.log(itemUrl);
      entities.push(entity);
    }
    fs.writeFileSync(`${__dirname}/data/${name}.json`, JSON.stringify(entities));
  }
}

fetchAllEntities();