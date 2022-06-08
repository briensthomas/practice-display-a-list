

export default function AnimalItem({ name, age, type, breed }) {
  return (
    <div className="animal-item">
      <h2>{name} the {type}</h2> 
      <span>{age} years old</span>
      <h3>{breed}</h3>       
    </div>
  );
}