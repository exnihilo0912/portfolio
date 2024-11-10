import './App.css';

import React, { useState } from 'react';

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
