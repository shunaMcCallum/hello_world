import React from "react";
import './App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup, Tooltip, CircleMarker } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import markerIconPng from "https://www.google.com/search?q=emoji+smilie+png&tbm=isch&ved=2ahUKEwj9rfH_u-H4AhWLw4UKHaUAAwUQ2-cCegQIABAA&oq=emoji+smilie+png&gs_lcp=CgNpbWcQAzIGCAAQHhAIOgQIIxAnOgcIABCxAxBDOgQIABBDOgsIABCABBCxAxCDAToKCAAQsQMQgwEQQzoICAAQgAQQsQM6BQgAEIAEOgQIABAeOgYIABAKEBhQ1QRY4h5g2SFoAHAAeACAAUOIAcwFkgECMTKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=2AjEYv3hKYuHlwSlgYwo&bih=734&biw=1440#imgrc=-pi95dUME9mAqM";
import { Icon } from "leaflet";

const map = () => {



    return (
        <>
            <div >
                {/* <h1>I'm a map</h1> */}
                <MapContainer className="map" center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                London Bridge! <br /> United Kingdom
                            </p>
                        </Popup>

                    </Marker>
                    <Marker position={[10, 49]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Somalia
                            </p>
                        </Popup>

                    </Marker>
                    <Marker position={[8, -66]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Venezuela
                            </p>
                        </Popup>

                    </Marker>
                    <Marker position={[1, 38]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Kenya
                            </p>
                        </Popup>

                    </Marker>
                    <Marker position={[6, 12]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Cameroon
                            </p>
                        </Popup>

                    </Marker>
                    <Marker position={[-18, 175]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Fiji
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[-34, -64]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Argentina
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[54, -2]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                United Kingdom
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[52.5, 5.75]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Netherlands
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[-41, 174]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                New Zealand
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[34, 9]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Tunisia
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[18.25, -66.5]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Puerto Rico
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[-5, 120]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Indonesia
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[45.6666666, 15.5]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Croatia
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[37, 127.5]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                South Korea
                            </p>
                        </Popup>
                    </Marker>
                    <Marker position={[62, 15]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup className="popup">
                            <p>
                                Sweden
                            </p>
                        </Popup>
                    </Marker>

                </MapContainer>
            </div>
        </>
    )
}

export default map;