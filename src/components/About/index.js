import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import LoadingScreen from '../../loadingScreen/LoadingScreen';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className='container about-page'>
          <div className='text-zone'>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p className="about-paragraph">
              I am a very ambitious software engineer, Emmanuel, who embarked on a
              transformative journey just a year ago. <br /> From humble beginnings as a
              coding novice, I have evolved into a virtuoso programmer, demonstrating
              the power <br />of determination, curiosity, and an unyielding pursuit
              of excellence.
            </p>
            <p className="about-paragraph">
              Confidence is my silent partner in the world of software engineering.
              Like an unyielding river carving its course<br /> through uncharted terrain,
              my journey as a coder has been marked by unwavering self-assurance.
            </p>
            <p className="about-paragraph">
              In this incredible journey of becoming a skilled software engineer, my
              ambition ignited the spark, and my confidence <br />fueled the fire. Now, as
              I look ahead, I am excited to keep pushing boundaries and exploring new
              <br /> horizons, for in the world of coding, the only constant is change.
            </p>
          </div>
          <div className='stage-cube-cont'>
            <div className='cube-spinner'>
              <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color='#dd0031'/>
              </div>
              <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
              </div>
              <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
              </div>
              <div className='face4'>
                <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
              </div>
              <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
              </div>
              <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color='#ec4d28'/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
