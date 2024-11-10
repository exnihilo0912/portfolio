import './App.css';

import React, { useState } from 'react';

const basePokemonCard = {
  id: 1, // Global ID
  name: '',
  type: '',
  hp: 0,
  stage: 0, // base(0) | 1 | 2
  rarity: '', // 1 diamond, 2 diamonds, 3 diamond, 4 diamond, 1 star, 2 stars, 3 stars, 1 crown
  weakness: {
    type: '',
    amount: 0,
  },
  retreat: [
    {
      type: '',
      count: 0,
    },
  ], 
  description: '', //
  moves: [
    {
      energies: [
        {
          type: '',
          amount: 1,
        }
      ],
      name: '',
      hitPoint: 0,
      hitPointModifier: '', // + | * | null
      effect: '',
    },
  ],
  ability: {
    flavorText: '',
  },
  booster: {
    id: '',
    name: '',
    series: ['A'],
    index: 1,
    cardTotal: 226,
  },
  illustrator: '', // name/illustrator id
  relatedCardIds: [],
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
        <article className='pokemon-card-collection__card'>{index + 1}</article>
      ))}
    </div>
  );
}
function SlotCardCollection() {
  return (<div>slot display mode</div>);
}


function App() {
  const [isSlotDisplayMode, setIsSlotDisplay] = useState(false);
  const cards = [1, 2, 3, 4, 5];

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
              <div>⓷</div>
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
