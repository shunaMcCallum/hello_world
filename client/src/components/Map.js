import React from "react";
import '../App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup, Tooltip, CircleMarker } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { Chart } from 'react-google-charts';
import NavBar from "../components/NavBar";
import '../styling/Map.css';


const Map = ({ countries }) => {

    const markers = countries.map((country) => {
        return (
            <Marker position={country.latlng} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                <Popup className="popup">
                    <p>
                        {country.name.common}
                        <p>Population:</p>
                        {country.population.toLocaleString()}
                    </p>
                </Popup>

            </Marker>
        )
    })

    const data2 = countries.map((country) => {
      return [country.name.common, country.population]
    })

    const data4 = [["Country", "Population"], ...data2];

    const options = {
        colorAxis: { colors: ["#a4db88", "#448b20"] },
        backgroundColor: "81d4fa",
        datalessRegionColor: "white",
    }


    return (
        <div className="map-page-container">
            <div>
                <NavBar />
            </div>
            <div>
                <h1 className="fun-title">Explore a map of the world!</h1>
            </div>
            
                <MapContainer className="leaflet-map" center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markers}
                </MapContainer>

            <div className="google-chart-map">
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
                    width="150vh"
                    height="70vh"
                    data={data4}
                    options = {options}
                />
            </div>

        </div>
    )
}

export default Map;