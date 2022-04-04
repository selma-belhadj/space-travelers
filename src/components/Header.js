import React from 'react';
import logo from '../images/logo.png';

function Header() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/Dragons',
      text: 'Dragons',
    },
    {
      id: 3,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 4,
      path: '/Profile',
      text: 'My Profile',
    },
  ];
  return (
    <header>
      <div>
        <img src={logo} alt="logo" style={{ width: '4.5rem', height: '4.5rem' }} />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
