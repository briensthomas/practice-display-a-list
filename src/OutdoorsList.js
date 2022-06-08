import OutdoorsItem from './OutdoorsItem.js';

export default function OutdoorsList({ outdoors }) {
  return (
    <div>
      {
        outdoors.map((outdoor, i) => <OutdoorsItem key={outdoor.name + i} {...outdoor} />)        
      }
    </div>
  );
}
