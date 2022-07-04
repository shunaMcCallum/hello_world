import React from "react";
import './App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';


const map = () => {
    return (
        <>
            <h1>I'm a map</h1>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={SVGComponentTransferFunctionElement}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>


        </>
    )
}

export default map;