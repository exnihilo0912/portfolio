
import { useLoaderData } from 'react-router-dom';

import List from '../components/List';
import Panel from '../components/Panel';
import PokemonType from '../components/PokemonType';
import Tabs from '../components/Tabs';

import usePokemon from '../customHooks/usePokemon';

export async function loader({ params: { pokemonId } }) {
  return { pokemonId };
}


function PokemonAbout() {
  return (
    <>
      <p>Pokedex description</p>
      <div>
        <div>weigth</div>
        <div>height</div>
      </div>
      <div>breeding</div>
      <div>abilities</div>
    </>
  );
}

function PokemonStat() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>HP</td>
            <td>value</td>
            <td>progress bar</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>value</td>
            <td>progress bar</td>
          </tr>
          <tr>
            <td>Defence</td>
            <td>value</td>
            <td>progress bar</td>
          </tr>
          <tr>
            <td>Sp. Atk</td>
            <td>value</td>
            <td>progress bar</td>
          </tr>
          <tr>
            <td>Sp. Def</td>
            <td>value</td>
            <td>progress bar</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>value</td>
            <td>progress bar</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function PokemonMoveList() {
  return (
    <ul>
      <li>Move</li>
    </ul>
  );
}

function PokemonEvolutionTimeline() {
  return (
    <div>
      <div>
        <div>sprite</div>
        <div>
          <span>index</span>
          <span>name</span>
          <ul><li>type</li></ul>
        </div>
        <div>
          <div>(left border vetical line) <span>evolution condition</span></div>
        </div>
      </div>
    </div>
  );
}

export default function PokemonDetailPage() {
  const { pokemonId } = useLoaderData();
  const pokemon = usePokemon(pokemonId);

  return (
    <>
      <section className="container" style={{ padding: '0 1rem 0 1rem'}}>
        <h1>{pokemon?.name}</h1>
        <div className="main-image-container">
          {
            pokemon
              ? (<img
                  className="sprite" src={pokemon?.sprites.front_default}
                  alt="pokemon sprite"
                />)
              : <div className='sprite-placeholder'></div>
          }
        </div>
      </section>
      <Panel isSection>
          <div>
            <div>
              <List className="list">
                {
                  pokemon?.types
                    .toSorted(({ slot: a }, { slot: b }) => a > b)
                    .map(({ type, slot }) => (
                      <li key={type.name}>
                        <PokemonType type={type.name} />
                      </li>
                    ))
                }
              </List>
            </div>
          </div>
          <h3>Tab test</h3>
          <div>
            <Tabs tabs={[
              { id: 'about', header: 'About', content: <PokemonAbout/> },
              { id: 'stats', header: 'Base Stats', content: <PokemonStat /> },
              { id: 'evolution', header: 'Evolution', content: <PokemonMoveList /> },
              { id: 'moves', header: 'Moves', content: <PokemonEvolutionTimeline /> },
            ]}/>
          </div>
      </Panel>
    </>
  );
}