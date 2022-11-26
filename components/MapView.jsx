import React from "react";
import {Map} from "react-leaflet"
import 'leaflet/dist/leaflet.css'

export default function MapView(){
    return(
        <Map className="w-full h-full" center={{lat: '51.52437', lng: '13.41053'}} zoom={13}>

        </Map>
    )
}