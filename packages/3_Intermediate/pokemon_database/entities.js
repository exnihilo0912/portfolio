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

class Generation {
  #data = undefined;

  constructor(initialData) {
    const isObject = typeof initialData === 'object';
    if ((isObject && 'url' in initialData)) {
      const { entity, id } = resolveUrl(initialData.url);
      this.#data = resolveEntity('generation', Number(id));
    } else if (typeof initialData === 'number') {
      this.#data = resolveEntity('generation', Number(initialData));
    } else {
      this.#data = initialData;
    }
  }

  get id() {
    return this.#data.id;
  }

  get name() {
    return this.#data.name;
  }
}

class VersionGroup {
  #data = undefined;

  constructor(initialData) {
    const isObject = typeof initialData === 'object';
    if (isObject && 'url' in initialData) {
      this.#data = initialData;
    } else {
      this.#data = initialData;
    }
  }

  get id() {
    return this.#data.id;
  }

  get name() {
    return this.#data.name;
  }

  get order() {
    return this.#data.name;
  }

  get generation() {
    return new Generation(resolveEntitythis.#data.generation.url);
  }
}

module.exports = {
  Generation,
  VersionGroup,
};