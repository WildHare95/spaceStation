import { useState } from 'react';
import './App.css';

import LocationComponent from 'components/LocationComponent/LocationComponent';
import MapComponent from 'components/MapComponent/MapComponent';


export type LocationType = {
  lat: number;
  lng: number;
}

function App() {
  const [location, setLocation] = useState<LocationType | null>(null)


  const handleLocation = (location: LocationType) => {
    setLocation(location)
  }


  return (
    <div>
      <LocationComponent handleLocation={handleLocation} location={location} />
      <MapComponent location={location} />
    </div>
  );
}

export default App;
