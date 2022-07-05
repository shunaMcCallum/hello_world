import React from "react";
import '../App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup, Tooltip, CircleMarker } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import markerIconPng from "https://www.google.com/search?q=emoji+smilie+png&tbm=isch&ved=2ahUKEwj9rfH_u-H4AhWLw4UKHaUAAwUQ2-cCegQIABAA&oq=emoji+smilie+png&gs_lcp=CgNpbWcQAzIGCAAQHhAIOgQIIxAnOgcIABCxAxBDOgQIABBDOgsIABCABBCxAxCDAToKCAAQsQMQgwEQQzoICAAQgAQQsQM6BQgAEIAEOgQIABAeOgYIABAKEBhQ1QRY4h5g2SFoAHAAeACAAUOIAcwFkgECMTKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=2AjEYv3hKYuHlwSlgYwo&bih=734&biw=1440#imgrc=-pi95dUME9mAqM";
import { Icon } from "leaflet";

const Map = ({ countries }) => {

    const markers = countries.map((country) => {
        return (
            <Marker position={country.latlng} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                <Popup className="popup">
                    <p>
                        {country.name.common}
                        <p>Population:</p>
                        {country.population}
                    </p>
                </Popup>

            </Marker>
        )
    })



    return (
        <>
            <div >
                {/* <h1>I'm a map</h1> */}
                <MapContainer className="map" center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markers}

                </MapContainer>
            </div>
        </>
    )
}

export default Map;