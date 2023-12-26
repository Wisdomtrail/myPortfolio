import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import logo from '../../assests/images/logo.jpg';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['u', 'n', 'd', 'a', 'y'];
  const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="container home-page">
      <div className="text Zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _10`}>i</span>
          <br />
          <span className={`${letterClass} _11`}>I</span>
          <span className={`${letterClass} _12`}>'m</span>
          <img src={logo} alt="developer" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={13} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18} />
        </h1>

        <h2 className='h2'>Software Developer / JavaScript Expert</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo/>
    </div>
  );
}

export default Home;
