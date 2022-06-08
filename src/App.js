import './App.css';
// import your arrays here
import { animals } from './animals.js';
import AnimalList from './AnimalsList.js';

import { sports } from './sports.js';
import SportsList from './SportsList.js';

import { games } from './games.js';
import GamesList from './GamesList.js';


function App() {
  return (
    <div className="App">
      <AnimalList animals={animals} />
      <hr />
      <SportsList sports={sports} />
      <hr />
      <GamesList games={games} />
    </div>
  );
}

export default App;
