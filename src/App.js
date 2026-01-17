// src/App.js
import React from 'react';
import { Helmet } from 'react-helmet';
import LandingPage from './unAuth/LandingPage';
import './App.css';
import './firebase';

function App() {
  return (
    <div className="app-structure-container">
      <Helmet>
        <meta
          name="description"
<<<<<<< Updated upstream
          content="Coffe is good is a free online tool that allows you to easily create timestamp links for YouTube videos. Share specific moments from videos with your friends and audience."
=======
          content="222 coffee is good is a free online tool that allows you to easily create timestamp links for YouTube videos. Share specific moments from videos with your friends and audience."
>>>>>>> Stashed changes
        />
        <meta
          name="keywords"
          content="YouTube, timestamp, links, video, sharing, free, online, tool"
        />
      </Helmet>
      <LandingPage />
    </div>
  );
}

export default App;