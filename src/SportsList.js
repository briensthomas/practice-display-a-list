import SportsItem from './SportsItem.js';

export default function SportsList({ sports }) {
  return <div className="sports-list">
    {
      sports.map((sport, i) => <SportsItem key={sport + i} sport={sport} />)
    }

  </div>;
}
