import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [dmOn, sliderToggle] = useDarkMode(false);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={sliderToggle}
          className={dmOn? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
