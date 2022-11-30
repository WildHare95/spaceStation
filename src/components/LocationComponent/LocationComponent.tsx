import { LocationType } from "App";
import { FC, useEffect } from "react";


type Props = {
    handleLocation: (location: LocationType) => void;
    location: LocationType | null
}

type ServerResponseLocationType = {
    message: string; 
    timestamp: string; 
    iss_position: {
        latitude: number, 
        longitude: number
    }
}

const LocationComponent: FC<Props> = ({handleLocation, location}) => {

    useEffect(() => {
        loadData()
        setInterval(loadData, 5000);
    }, [])

    const loadData = async () => {
        await fetch('http://api.open-notify.org/iss-now.json')
                .then(response => response.json())
                .then((response: ServerResponseLocationType) => {
                    const {latitude, longitude} = response.iss_position
                    handleLocation({lat: latitude, lng:longitude})
                }
            )
    }

    return <div>
        {location?.lat},
        {location?.lng}
    </div>
}

export default LocationComponent