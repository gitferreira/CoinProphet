
import Globe from 'react-globe.gl';

import globeImage from '../assets/earth-dark.jpg';

const World = ({className}) => {

  
    return (
      <div className={`cursor-move ${className}`}>
        <Globe globeImageUrl={globeImage}  pointAltitude='altitude' pointColor='color' width="500" height="500" backgroundColor='#1515150' />
      </div>
    );
  };
  
  export default World;