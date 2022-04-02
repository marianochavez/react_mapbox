/* eslint import/no-webpack-loader-syntax: off */

// @ts-ignore
import { Map } from "!mapbox-gl";
import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext, MapContext } from '../context';
import { Loading } from "./";

export const MapView = () => {

    const { isLoading, userLocation } = useContext(PlacesContext);
    const { isMapReady, setMap } = useContext(MapContext);

    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 14 // starting zoom
            });
            setMap(map);
        }
    }, [isLoading])

    if (isLoading) {
        return (<Loading />)
    }

    return (
        <div
            ref={mapDiv}
            style={{
                height: '100vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw',
            }}
        >
        </div>
    )
}
