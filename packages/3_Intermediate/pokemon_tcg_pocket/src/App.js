import './App.css';

import React, { useState } from 'react';

import PokemonCard from './components/PokemonCard';

const basePokemonCard = {
  id: 1, // Global ID
  pokemon: {
    nationalDexIndex: 1,
    height: `2'4"`,
    weight: 15.2,
    specie: 'seed pokemon',
  },
  name: 'bulbasaur',
  translatedNames: [
    {
      languageCode: 'en-en',
      name: 'bulbasaur',
    },
    {
      languageCode: 'fr-fr',
      name: 'bulbizare',
    },
  ],
  type: 'grass',
  hp: 70,
  stage: 0, // base(0) | 1 | 2
  rarity: '1D', // 1 diamond, 2 diamonds, 3 diamond, 4 diamond, 1 star, 2 stars, 3 stars, 1 crown
  weakness: {
    type: 'fire',
    amount: 20,
  },
  retreat: [
    {
      type: 'normal',
      count: 1,
    },
  ],
  description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.', //
  moves: [
    {
      energies: [
        {
          type: 'grass',
          amount: 1,
        },
        {
          type: 'normal',
          amount: 1,
        }
      ],
      name: 'vine whip',
      hitPoint: 40,
      hitPointModifier: null, // + | * | null
      effect: null,
    },
  ],
  ability: {
    id: null,
    name: null,
    flavorText: null,
  },
  series: ['A'],
  booster: {
    id: 2,
    name: 'mewtwo',
    familyName: 'genetic apex',
    index: 1,
    cardTotal: 226,
  },
  illustrator: {
    id: 1,
    name: 'Narumi Sato'
  }, // name/illustrator id
  relatedCardIds: [2, 3, 4, 227, 251],
};

const playerPokemonCards = [
  {
    id: 1,
    count: 1,
  }
]

function CardCollection({ cards }) {
  return (
    <div className='pokemon-card-collection'>
      {cards.map((card, index) => (
        <article className='pokemon-card-collection__card'>
          {
            card
              ? <PokemonCard card={card} />
              : (
                <p>
                  {index + 1}
                  <p>Enforce the card ration</p>
                </p>
              )
          }
        </article>
      ))}
    </div>
  );
}
function SlotCardCollection({ cards }) {
  return (
    <div className='pokemon-card-collection pokemon-card-collection--slot'>
      {cards.map((card, index) => (
        <article className='pokemon-card-collection__card pokemon-card-collection__card--slot'>
          {
            card
              ? <PokemonCard card={card} />
              : (
                <span>
                  {String(index + 1).padStart(3, '0')}
                </span>
              )
          }
        </article>
      ))}
    </div>
  );
}


function App() {
  const [isSlotDisplayMode, setIsSlotDisplay] = useState(false);
  const cards = Array(245).fill(null)
  cards.unshift(basePokemonCard);

  return (
    <div id="layout">
      <header className='header'>
        <div className='head'>
          <h1>My Cards</h1>
        </div>
        <div className='inner_border'></div>
      </header>
      <main className="body">
        <div class="card-block">
          <div className="card-block__menu">
            <div className='card-block__menu__item'>
              <div>①</div>
              <span>Binders</span>
            </div>
            <div className='card-block__menu__item'>
              <div>②</div>
              <span>Display Boards</span>
            </div>
            <div className='card-block__menu__item'>
              <div>③</div>
              <span>Decks</span>
            </div>
          </div>
          <div className="card-block__sub-menu">
            <div>
              <i>🂠</i>
              <span>426</span>
            </div>
            <div className='flex flex--centered'>
              <div className='flex flex--centered'>
                <span>switch</span>
                <input
                  type='checkbox'
                  onClick={() => setIsSlotDisplay((prevValue) => !prevValue)}
                />
              </div>
              <div className='separator--vertical'></div>
              <div>🔎</div>
            </div>
          </div>
        </div>
        <section style={{ width: '100%'}}>
          { isSlotDisplayMode
            ? <SlotCardCollection cards={cards} />
            : <CardCollection cards={cards} />
          }
        </section>
      </main>
      <footer className='footer'>
        <nav>
          <ul>
            <li>🏠</li>
            <li>📥</li>
            <li>🧑‍🤝‍🧑</li>
            <li>🔪</li>
            <li>🍔</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
