import React from 'react';

const Navbar = () => {
  const navbar = {
    backgroundColor: '#256f',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const h1 = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <nav style={navbar}>
      <h1 style={h1}>Meme Generator - Make Your Own Meme! </h1>
    </nav>
  );
};

export default Navbar;