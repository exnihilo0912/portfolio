import usePokemonSpecie from "../../customHooks/usePokemonSpecie";

export default function PokemonAbout({ pokemon }) {
  const {
    abilities,
    height,
    weight,
  } = pokemon || {};
  const specie = usePokemonSpecie(pokemon?.id)
  const {
    flavorTextEntries,
    gender_rate: genderRate
  } = specie || {};
  const [redVersionFlavorText] = flavorTextEntries || [];
  const { flavor_text: flavorText } = redVersionFlavorText || {};
  const femaleEncounterRate = (genderRate / 8);
  const maleEncounterRate = 1 - femaleEncounterRate;

  return pokemon && (
    <>
      <p>{flavorText}</p>
      <div>
        <div>{weight/10}kg</div>
        <div>{height/10}m</div>
      </div>
      <div>
        <ul>
          <li>male: {maleEncounterRate * 100}%</li>
          <li>female: {femaleEncounterRate * 100}%</li>
        </ul>
      </div>
      <div>
        <ul>
          {
            abilities.map(({ ability }) => (
              <li>{ability.name}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
}