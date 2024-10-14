import './index.css';

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
        <table className='stat-table'>
          <tbody>
            <tr className='stat-table__row'>
              <td className='stat-table__cell'>HP</td>
              <td className='stat-table__cell'>{hpStat?.base_stat}</td>
              <td className='stat-table__cell'><ProgressBar value={hpStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td className='stat-table__cell'>Attack</td>
              <td className='stat-table__cell'>{attackStat?.base_stat}</td>
              <td className='stat-table__cell'><ProgressBar value={attackStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td className='stat-table__cell'>Defense</td>
              <td className='stat-table__cell'>{defenseStat?.base_stat}</td>
              <td className='stat-table__cell'><ProgressBar value={defenseStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td className='stat-table__cell'>Sp. Atk</td>
              <td className='stat-table__cell'>{specialAttackStat?.base_stat}</td>
              <td className='stat-table__cell'><ProgressBar value={specialAttackStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td className='stat-table__cell'>Sp. Def</td>
              <td className='stat-table__cell'>{specialDefenseStat?.base_stat}</td>
              <td className='stat-table__cell'><ProgressBar value={specialDefenseStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
            <tr>
              <td className='stat-table__cell'>Speed</td>
              <td className='stat-table__cell'>{speedStat?.base_stat}</td>
              <td className='stat-table__cell'><ProgressBar value={speedStat?.base_stat} maxValue={progressBarMaxValue} /></td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}