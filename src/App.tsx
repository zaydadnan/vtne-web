import waddle from './penguin.gif';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={waddle} className="App-logo" alt="logo" />
        <h1 className="text-4xl text-slate-800 font-bold mt-[-50px]">
          get waddling.
        </h1>
          <a
            className="text-2xl text-slate-800 font-bold"
            href="step.champ://?name=zaydadnan"
          >Add friend here</a>

      </header>
    </div>
  );
}

export default App;
