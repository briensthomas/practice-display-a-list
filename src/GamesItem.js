
export default function GamesItem({ name, type, consoles }) {
  return (
    <div className="games-item">
      {/* {
        consoles.map(console => <div key={console.pc}></div>)
      }         */}
      <h2>{name}</h2>
      <h3>Genre: {type}</h3>
      <p>PC: {consoles.pc}, PS4: {consoles.pc}, Xbox One: {consoles.xbox1},</p>
    </div>
  );
}