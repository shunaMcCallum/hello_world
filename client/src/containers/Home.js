import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/api/countries")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
            <div>
                <h1>Fun with Flags!</h1>

            </div>
            <div>
                <CountryList countries={countries} />
            </div>

        </>
    )

}
export default Home;