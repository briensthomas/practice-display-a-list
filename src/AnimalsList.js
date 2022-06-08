import AnimalItem from './AnimalItem.js';

export default function AnimalList({ animals }) {
  return (
    <div className='animal-list'>
      {
        animals.map((animal, i) => <AnimalItem 
          key={animal.name + i} 
          {...animal} />)
      }
    </div>
  );
}
