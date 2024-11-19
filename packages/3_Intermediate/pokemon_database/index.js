
async function resolveUrl(url) {
  const [entity, id] = url.split('/').slice(-3, -1);
  console.log({ entity, id });
}

const testUrls = [
  'https://pokeapi.co/api/v2/language/1/',
  'https://pokeapi.co/api/v2/encounter-method/2/',
  'https://pokeapi.co/api/v2/version-group/11/',
]

for (const url of testUrls) {
  resolveUrl(url);
}