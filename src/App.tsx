import React from 'react';
import waddle from './penguin.gif';
import './App.css';

function App() {
  const handleRedirect = () => {
    const appSchemeURL = "step-champ://";
    // const fallbackURL = "https://your-fallback-url.com"; // Change this to your actual fallback URL or App Store link

      window.location.pathname = appSchemeURL;

      setTimeout(() => {
        window.location.pathname = appSchemeURL;
      }, 1000); // 1 second delay before redirecting to fallback URL
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={waddle} className="App-logo" alt="logo" />
        <h1 className="text-4xl text-slate-800 font-bold mt-[-50px]">
          get waddling.
        </h1>
        <button
          className="text-2xl text-slate-800 font-bold"
          onClick={handleRedirect}
        >
          Add friend heres
        </button>
      </header>
    </div>
  );
}

export default App;
