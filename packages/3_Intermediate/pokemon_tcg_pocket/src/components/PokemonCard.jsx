
const stageNameByIndex = {
  '0': 'basic',
  '1': 'stage 1',
  '2': 'stage 2',
};

export default function PokemonCard({ card }) {
  return (
    <div className='pokemon-card'>
      <div className='pokemon-card__border'>
        <div className='pokemon-card__content'>
          <header className='pokemon-card__header'>
            <div className='pokemon-card__header__stage'>{stageNameByIndex[card.stage]}</div>
            <div className='pokemon-card__header__name'>{card.name}</div>
            <div className='pokemon-card__header__hp'>HP<span>{card.hp}</span></div>
            <div className='pokemon-card__header__type'>⭕️</div>
          </header>
          <div className='pokemon-card__image-container'>
            <div className='pokemon-card__image'></div>
            <div className='pokemon-card__desc'>
              <span>NO {String(card.pokemon.nationalDexIndex).padStart(4, '0')}</span>
              &nbsp;<span className='text text--capitalize'>{card.pokemon.specie}</span>
              &nbsp;<span>HT {card.pokemon.height}</span>
              &nbsp;<span>WT {card.pokemon.weight} lbs</span>
            </div>
          </div>
          <div className='pokemon-card__moves'>
            <ul className='pokemon-card_move-list'>
              {card.moves.map((move) => (
                <li className='pokemon-card_move-list__item'>
                  <div className='flex flex--tight'>
                    {
                      move.energies.map((energy) => (
                        <ul className='flex flex--tight'>
                          {Array(energy.amount).fill(0).map((energyLogo, energyLogoIndex) => (
                            <li key={energyLogoIndex}>
                              <span>🍁</span>
                            </li>
                          ))}
                        </ul>
                      ))
                    }
                  </div>
                  <div>{move.name}</div>
                  <div>{move.hitPoint}</div>
                </li>
              ))}
            </ul>
          </div>
          <footer className='pokemon-card__footer'>
            <div className="flex flex--space-between">
              <div>weakness</div>
              <div>retreat</div>
            </div>
            <div className="flex flex--space-between">
              <div>
                <div>Ill. {card.illustrator.name}</div>
                <div>rarity</div>
              </div>
              <div>description</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}