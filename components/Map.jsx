import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

const MAPBOXTOKEN = process.env.MAPBOXTOKEN;

mapboxgl.accessToken = MAPBOXTOKEN;

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-99.0310);
    const [lat, setLat] = useState(19.4375);
    const [zoom, setZoom] = useState(10);
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
            <div style={{ height: '500px', width: '100%', }} ref={mapContainer} className="map-container" />
        </div>
    );
}