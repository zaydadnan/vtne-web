import waddle from './penguin.gif';
import './App.css';


function App() {
  
  const handleButtonClick = () => {
    const url = 'step-champ://?name=zaydadnan';
    window.location.href = url;

    setTimeout(() => {
      window.location.href = 'https://yourdomain.com/fallback';  // Change this to your website's fallback URL
    }, 1000);
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
          onClick={handleButtonClick}
        >
          Add friend here
        </button>

      </header>
    </div>
  );
}

export default App;
