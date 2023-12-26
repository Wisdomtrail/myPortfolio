// LoadingScreen.js

import React, { useEffect, useState } from 'react';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed (e.g., 3000ms or 3 seconds)

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className={`loading-screen ${isLoading ? 'loading' : 'loaded'}`}>
      {isLoading ? (
        <div className="loading-animation">
          <div className="larger-circle"></div>
          <div className="small-circles">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className={`small-circle small-circle-${index + 1}`}></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="loaded-content">
          {/* Your main content here */}
          <h1>Loading Complete</h1>
          <p>Your content goes here...</p>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
