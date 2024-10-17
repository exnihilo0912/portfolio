import PokemonType, { typeDetailByTypeName } from '../PokemonType';

import usePokemonMove from '../../customHooks/usePokemonMove';

export default function PokemonMove({ move, ...props }) {
  const { move: { name, url }, version_group_details } = move || {};
  const [, moveId] = url?.split('/')?.reverse();
  const pokemonMove = usePokemonMove(Number(moveId)) || {};
  const { name: typeName } = pokemonMove?.type || {};

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }} {...props}>
      <span style={{ textTransform: 'capitalize', fontWeight: '500', flexBasis: '100px' }}>{name}</span>
      <span><PokemonType type={typeName} /></span>
      &nbsp;
      <small style={{ color: 'hsl(0, 0%, 50%)' }}>Lv. {version_group_details.at(0).level_learned_at}</small>
    </div>
  );
}