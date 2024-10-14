import ProgressBar from "../ProgressBar";

export default function PokemonStat({ pokemon }) {
  const [
    hpStat,
    attackStat,
    defenseStat,
    specialAttackStat,
    specialDefenseStat,
    speedStat,
  ] = pokemon?.stats || [];
  const progressBarMaxValue = Math.max(...(pokemon?.stats.map((stat) => stat?.base_stat) || [0]));

  return (
    <>
      {pokemon?.stats && (
        <table>
          <tbody>
            <tr>
              <td>HP</td>
              <td>{hpStat?.base_stat}</td>
              <td><ProgressBar value={hpStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{attackStat?.base_stat}</td>
              <td><ProgressBar value={attackStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{defenseStat?.base_stat}</td>
              <td><ProgressBar value={defenseStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td>Sp. Atk</td>
              <td>{specialAttackStat?.base_stat}</td>
              <td><ProgressBar value={specialAttackStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td>Sp. Def</td>
              <td>{specialDefenseStat?.base_stat}</td>
              <td><ProgressBar value={specialDefenseStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{speedStat?.base_stat}</td>
              <td><ProgressBar value={speedStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}