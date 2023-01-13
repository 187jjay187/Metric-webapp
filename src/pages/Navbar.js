// imports

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillGearFill, BsCaretLeftFill } from 'react-icons/bs';
import worldometersImg from '../images/worldometers.png';

// create a navbar

const Navbar = () => {
  const navigate = useNavigate();

  // return the logo title & settings icon on the homepage
  // return the back button & the settings icon

  return (
    <nav className="header">
      {
        window.location.pathname === '/'
          ? (
            <span><img className="worldometersImg" src={worldometersImg} alt="worldometers" /></span>
          )
          : (
            <button type="button" onClick={() => navigate(-1)}>
              <BsCaretLeftFill />
              Back
            </button>
          )
      }
      <div className="Covid-title"><h1>Coronavirus</h1></div>
      <div className="header-actions"><span><BsFillGearFill /></span></div>
    </nav>
  );
};

// export

export default Navbar;
