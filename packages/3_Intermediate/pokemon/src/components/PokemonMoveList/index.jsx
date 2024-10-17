import List, { ListItem } from "../List";

export default function PokemonMoveList({ pokemon }) {
  const { moves } = pokemon || {};
  const levelUpLearnedMoves = moves?.filter(({ version_group_details }) => version_group_details.at(0).move_learn_method.name === 'level-up');
  levelUpLearnedMoves?.sort((a, b) => {
    const { version_group_details: detailsA } = a;
    const { version_group_details: detailsB } = b;
    const [detailA] = detailsA;
    const [detailB] = detailsB;
    const { level_learned_at: levelLearnedAtA  } = detailA;
    const { level_learned_at: levelLearnedAtB  } = detailB;

    return levelLearnedAtA - levelLearnedAtB;
  });
  const machineLearnedMoves = moves?.filter(({ version_group_details }) => version_group_details.at(0).move_learn_method.name === 'machine');
  return (
    <div>
      <div>Moves</div>
      <div>Learned</div>
      {levelUpLearnedMoves && (
        <List
          items={levelUpLearnedMoves}
          renderItem={({ move, version_group_details }, index) => (
            <ListItem key={index} style={{ padding: '0.5rem 1rem', borderBottom: '1px solid hsl(0, 0%, 90%)'}}>
              <span style={{ textTransform: 'capitalize', fontWeight: '500'}}>{move.name}</span>
              &nbsp;
              <small style={{ color: 'hsl(0, 0%, 50%)'}}>Lv. {version_group_details.at(0).level_learned_at}</small>
            </ListItem>
          )}
        />
      )}
      <hr/>
      <div>Learned</div>
      <List
        items={machineLearnedMoves}
        renderItem={({ move, version_group_details }, index) => (
          <ListItem key={index} style={{ padding: '0.5rem 1rem', borderBottom: '1px solid hsl(0, 0%, 90%)' }}>
            <span style={{ textTransform: 'capitalize', fontWeight: '500' }}>{move.name}</span>
            &nbsp;
            <small style={{ color: 'hsl(0, 0%, 50%)' }}>CT.??</small>
          </ListItem>
        )}
      />
    </div>
  );
}