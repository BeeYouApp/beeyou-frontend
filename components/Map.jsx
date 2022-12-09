import React, { useRef, useEffect, useState } from 'react';
// import * as dotenv from "dotenv";
import mapboxgl from '!mapbox-gl'; 

// dotenv.config()
const mapboxToken = process.env.mapboxToken;
 
mapboxgl.accessToken = mapboxToken;

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; 
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
        });

    return (
        <div>
            <div className="sidebar absolute">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div style={{height: '500px', width: '100%',}} ref={mapContainer} className="map-container" />
        </div>
    );
}