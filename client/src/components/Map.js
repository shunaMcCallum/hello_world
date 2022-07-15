import React from "react";
import '../App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup, Tooltip, CircleMarker } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import markerIconPng from "https://www.google.com/search?q=emoji+smilie+png&tbm=isch&ved=2ahUKEwj9rfH_u-H4AhWLw4UKHaUAAwUQ2-cCegQIABAA&oq=emoji+smilie+png&gs_lcp=CgNpbWcQAzIGCAAQHhAIOgQIIxAnOgcIABCxAxBDOgQIABBDOgsIABCABBCxAxCDAToKCAAQsQMQgwEQQzoICAAQgAQQsQM6BQgAEIAEOgQIABAeOgYIABAKEBhQ1QRY4h5g2SFoAHAAeACAAUOIAcwFkgECMTKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=2AjEYv3hKYuHlwSlgYwo&bih=734&biw=1440#imgrc=-pi95dUME9mAqM";
import { Icon } from "leaflet";
import { Chart } from 'react-google-charts';
import NavBar from "../components/NavBar";


const Map = ({ countries }) => {

    // const markers = countries.map((country) => {
    //     return (
    //         <Marker position={country.latlng} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
    //             <Popup className="popup">
    //                 <p>
    //                     {country.name.common}
    //                     <p>Population:</p>
    //                     {country.population.toLocaleString()}
    //                 </p>
    //             </Popup>

    //         </Marker>
    //     )
    // })

    const data2 = countries.map((country) => {
      return [country.name.common, country.population]
    })

    const data4 = [["Country", "Population"], ...data2];

    const options = {
        colorAxis: { colors: ["#94bf7f", "#194c00"] },
        backgroundColor: "81d4fa",
        datalessRegionColor: "white",
    }


    return (
        <>
            {/* <div>
                <NavBar />
            </div>
            <div >
                <h1 className="fun-title">A map of the world!</h1>

                <MapContainer className="map" center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markers}



                </MapContainer>
            </div> */}

            <div>
                <Chart
                    chartEvents={[
                        {
                            eventName: "select",
                            callback: ({ chartWrapper }) => {
                                const chart = chartWrapper.getChart();
                                const selection = chart.getSelection();
                                if (selection.length === 0) return;
                                const region = data4[selection[0].row + 1];
                                console.log("Selected : " + region);
                            },
                        },
                    ]}
                    chartType="GeoChart"
                    width="100%"
                    height="400px"
                    data={data4}
                    options = {options}
                />
            </div>

        </>
    )
}

export default Map;