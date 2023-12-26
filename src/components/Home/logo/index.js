import React, { useEffect } from 'react';
import gsap from 'gsap';
import singleEyeAnimation from './lottie.json'; 
import lottie from 'lottie-web';
import './index.scss';

const Logo = () => {
  useEffect(() => {
    const drawEye = () => {
      const eyeTimeline = gsap.timeline();

      eyeTimeline.to('.lottie-container', { opacity: 1, duration: 1 });
      lottie.loadAnimation({
        container: document.querySelector('.lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: singleEyeAnimation, 
      });
    };

    drawEye();
  }, []);

  return (
    <div className="mind-blowing-container">
      <div className="lottie-container" style={{ opacity: 0 }}></div>
    </div>
  );
};

export default Logo;
