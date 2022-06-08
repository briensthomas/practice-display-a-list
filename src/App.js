import './App.css';
// import your arrays here
import { animals } from './animals.js';
import AnimalList from './AnimalsList.js';

import { sports } from './sports.js';
import SportsList from './SportsList.js';

function App() {
  return (
    <div className="App">
      <AnimalList animals={animals} />
      <hr />
      <SportsList sports={sports} />
      <hr />
    </div>
  );
}

export default App;
