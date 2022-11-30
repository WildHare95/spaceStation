import { FC, useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import MarkerComponent from "../MarkerComponent/MarkerComponent";
import { LocationType } from "App";


type Props = {
  location: LocationType | null
}

const MapComponent: FC<Props> = ({location}) => {
    const [center, setCenter] = useState<LocationType>({lat: 55, lng: 55});
    const [zoom, setZoom] = useState(3);

    console.log(location);
    
    
    return <div style={{ height: '100vh', width: '100%' }}>
      {
        location &&
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDr30IHdMb-exyhmLDM5ngeAYHh2zwhDcg' }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <MarkerComponent
              lat={location.lat}
              lng={location.lng}
            />
          </GoogleMapReact>
      }
  </div>

}

export default MapComponent