
export default function OutdoorsItem({ name, location, features }) {
  return (
    <div className="outdoors-item">
      <h2>{name}</h2>
      <h3>Located at: {location}</h3> 
      <p>Features: {features}</p>      
    </div>
  );
}