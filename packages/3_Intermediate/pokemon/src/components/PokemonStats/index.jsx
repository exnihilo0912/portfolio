export default function PokemonStat({ pokemon }) {
  const [
    hpStat,
    attackStat,
    defenseStat,
    specialAttackStat,
    specialDefenseStat,
    speedStat,
  ] = pokemon?.stats || [];
  return (
    <>
      {pokemon?.stats && (
        <table>
          <tbody>
            <tr>
              <td>HP</td>
              <td>{hpStat?.base_stat}</td>
              <td>progress bar</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{attackStat?.base_stat}</td>
              <td>progress bar</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{defenseStat?.base_stat}</td>
              <td>progress bar</td>
            </tr>
            <tr>
              <td>Sp. Atk</td>
              <td>{specialAttackStat?.base_stat}</td>
              <td>progress bar</td>
            </tr>
            <tr>
              <td>Sp. Def</td>
              <td>{specialDefenseStat?.base_stat}</td>
              <td>progress bar</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{speedStat?.base_stat}</td>
              <td>progress bar</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}