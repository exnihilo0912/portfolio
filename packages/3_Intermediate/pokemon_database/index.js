const fs = require('fs');

async function resolveUrl(url) {
  const [entity, id] = url.split('/').slice(-3, -1);
  console.log({ entity, id });
}

async function resolveEntity(name, id, depth, shape) {
  const entityFilePath = `./data/${name}.json`;
  const doesEntityExist = fs.existsSync(entityFilePath);
  if (!doesEntityExist) {
    throw Error('Entity does not exist.');
  }

  const entities = require(entityFilePath);
  const targetEntity = entities.find(({ id: entityId }) => entityId === id)
  console.log(targetEntity);
}

// const testUrls = [
//   'https://pokeapi.co/api/v2/language/1/',
//   'https://pokeapi.co/api/v2/encounter-method/2/',
//   'https://pokeapi.co/api/v2/version-group/11/',
// ]

// for (const url of testUrls) {
//   resolveUrl(url);
// }

resolveEntity('version-group', 11);