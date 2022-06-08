
export default function GamesItem({ name, type, consoles }) {
  return (
    <div className="games-item">
      <h2>{name}</h2>
      <h3>Genre: {type}</h3>
      <p>Available on:</p>
      {
        Object.entries(consoles)
          .filter((console) => console[1])
          .map((console, i) => <div key={console + i }> {console[0]} </div>)
      }        
      {/* <p>PC: {consoles.pc}, PS4: {consoles.pc}, Xbox One: {consoles.xbox1},</p> */}
    </div>
  );}