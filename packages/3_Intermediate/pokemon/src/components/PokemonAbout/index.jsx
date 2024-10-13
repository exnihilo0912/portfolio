export default function PokemonAbout({ pokemon }) {
  const {
    abilities,
    height,
    weight,
  } = pokemon || {};

  return pokemon && (
    <>
      <p>Pokedex description</p>
      <div>
        <div>{weight/10}kg</div>
        <div>{height/10}m</div>
      </div>
      <div>breeding</div>
      <div>
        <ul>
          {abilities.map(({ ability }) => (
            <li>{ability.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}