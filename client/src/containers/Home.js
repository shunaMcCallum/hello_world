import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import PaginationContainer from './PaginationContainer.js';
import { Link } from "react-router-dom";


const Home = ({ selectedUser, addCountryStudied, removeCountryStudied }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        fetch("http://localhost:9000/api/countries")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    // function links to ListItem component - when an item is clicked it runs this function
    const onCountryClick = (country) => {
        setSelectedCountry(country);
    };


    const handleCountryStudied = (country) => {
        addCountryStudied(country)
    }

    const handleRemoveCountryStudied = (country) => {
        removeCountryStudied(country)
    }

    return (
        <div>
            <div>
                <h1>Fun with Flags!</h1>
            </div>
            <h1>{selectedUser.name}'s Page</h1>
            <button><Link to="/" >Logout</Link></button>
            <CountryList countries={countries} onCountryClick={onCountryClick} handleCountryStudied={handleCountryStudied} handleRemoveCountryStudied={handleRemoveCountryStudied} selectedUser={selectedUser} />
            {selectedCountry ? <PaginationContainer country={selectedCountry} title="Paginated Content" pageLimit={5} /> : null}
        </ div>
    )
}

export default Home;