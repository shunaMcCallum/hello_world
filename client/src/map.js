import React from "react";
import './App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';


const map = () => {



    return (
        <>
            <div >
                {/* <h1>I'm a map</h1> */}
                <MapContainer className="map" center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup className="popup">
                            <p>
                                London Bridge! <br /> United Kingdom
                            </p>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </>
    )
}

export default map;