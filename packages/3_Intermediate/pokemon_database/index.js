const { Generation, VersionGroup } = require('./entities');

const generationById = new Generation(1);
const generationByReference = new Generation({
  "name": "generation-i",
  "url": "https://pokeapi.co/api/v2/generation/1/"
});

console.log({ type: 'by id', name: generationById.name, id: generationById.id });
console.log({ type: 'by reference', name: generationByReference.name, id: generationByReference.id });