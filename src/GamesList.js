import GamesItem from './GamesItem.js';


export default function GamesList({ games }) {
  return (
    <div className="games-list">
      {
        games.map((game, i) => <GamesItem key={game.name + i} {...game} />)
      }   
    </div>
  );
}