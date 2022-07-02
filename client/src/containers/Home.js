import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import PaginationContainer from './PaginationContainer.js';


const Home = () => {
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

    return (
        <>
            <div>
                <h1>Fun with Flags!</h1>
            </div>
            <div>
                <CountryList countries={countries} onCountryClick={onCountryClick} />
                {selectedCountry ? <PaginationContainer country={selectedCountry} title="Paginated Content" pageLimit={5} /> : null}
            </div>
        </>
    )
}

export default Home;