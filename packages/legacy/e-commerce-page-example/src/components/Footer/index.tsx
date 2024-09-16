import React from 'react';

import './style.css';

// === COMPONENT ===
const Footer = (): JSX.Element => {
  return (
    <footer className='footer'>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        &nbsp;Frontend Mentor
      </a>.
      <p>
        Coded by <a href="#">Adam EMMANUEL</a>.
      </p>
    </footer>
  );
};

export default Footer;