import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import PaginationContainer from './PaginationContainer.js';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/api/countries")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
            <CountryList countries={countries} />
            <PaginationContainer />
        </>
    )

}
export default CountryContainer;