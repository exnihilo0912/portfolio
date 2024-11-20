const fs = require('fs');

function resolveUrl(url) {
  const [entity, id] = url.split('/').slice(-3, -1);
  return { entity, id };
}

function resolveEntity(name, id, depth = 1) {
  const entityFilePath = `./data/${name}.json`;
  const doesEntityExist = fs.existsSync(entityFilePath);
  if (!doesEntityExist) {
    throw Error('Entity does not exist.');
  }

  const entities = require(entityFilePath);
  const targetEntity = { ...(entities.find(({ id: entityId }) => entityId === id) || {}) }
  for (prop in targetEntity) {
    const isObject = typeof targetEntity[prop] === 'object' && targetEntity[prop] !== null;
    if (isObject && 'url' in targetEntity[prop]) {
      const { entity, id } = resolveUrl(targetEntity[prop].url);
      if ((depth - 1) >= 0) {
        targetEntity[prop] = resolveEntity(entity, Number(id), depth - 1);
      }
    } else if (isObject && Array.isArray(targetEntity[prop])) {
      let i = 0;
      const entries = targetEntity[prop];
      for (const obj of targetEntity[prop]) {
        const isObj = typeof obj === 'object' && obj !== null;
        if (isObj && 'url' in obj) {
          const { entity, id } = resolveUrl(obj.url);
          if ((depth - 1) >= 0) {
            entries[i] = resolveEntity(entity, Number(id), depth - 1);
          }
        }
        i++;
      }
    }
  }
  return targetEntity;
}

// const testUrls = [
//   'https://pokeapi.co/api/v2/language/1/',
//   'https://pokeapi.co/api/v2/encounter-method/2/',
//   'https://pokeapi.co/api/v2/version-group/11/',
// ]

// for (const url of testUrls) {
//   resolveUrl(url);
// }

const result = resolveEntity('version-group', 1, 2);
// console.log(result);

fs.writeFileSync(`${__dirname}/test.json`, JSON.stringify(result));