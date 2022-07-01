import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

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
        </>
    )

}
export default CountryContainer;