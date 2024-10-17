import PokemonType from '../PokemonType';

import usePokemonMove from '../../customHooks/usePokemonMove';

export default function PokemonMove({ move, ...props }) {
  const { move: { name, url }, version_group_details } = move || {};
  const [, moveId] = url?.split('/')?.reverse();
  const pokemonMove = usePokemonMove(Number(moveId)) || {};
  const { name: typeName } = pokemonMove?.type || {};
  const learnMethod = version_group_details.at(0).move_learn_method.name;
  const machine = learnMethod === 'machine'
    ? pokemonMove?.machines?.find(({ version_group: versionGroup }) => versionGroup === 'red-blue' || versionGroup )
    : null;
  const machineIndex = machine?.machine?.url;
  const renderLearnMethod = {
    'level-up': `Lv. ${version_group_details.at(0).level_learned_at}`,
    machine: `TM ${JSON.stringify(machineIndex)}`,
  };

  return (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} {...props}>
      {moveId}
      <span style={{ textTransform: 'capitalize', fontWeight: '500', flexBasis: '130px' }}>{name}</span>
      <span><PokemonType type={typeName} size='tiny' /></span>
      <small style={{ color: 'hsl(0, 0%, 50%)' }}>{renderLearnMethod[learnMethod]}</small>
    </div>
  );
}