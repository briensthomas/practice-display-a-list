import './App.css';
// import your arrays here
import { animals } from './animals.js';
import AnimalList from './AnimalsList';


function App() {
  return (
    <div className="App">
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;
