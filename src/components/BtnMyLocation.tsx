import { useContext } from "react"
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {

    const { isMapReady, map } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext)

    const onClick = () => {
        if(!isMapReady) throw new Error('Map is not ready yet')
        if(!userLocation) throw new Error('User location is not ready yet')

        map?.flyTo({
            zoom: 14,
            center: userLocation
        })
    }

    return (
        <button
            className='btn'
            onClick={onClick}
            style={{
                position: 'fixed',
                backgroundColor: '#61DBFB',
                top: '20px',
                right: '20px',
                zIndex: 999

            }}
        >
            Mi Ubicación
        </button>
    )
}
