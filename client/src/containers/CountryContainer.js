import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    // const [countries, setCountries] = useState([]);


    // useEffect(() => {
    //     getCountries();
    // }, [])


    // const getCountries = function () {
    //     fetch()
    //         .then(res => res.json())
    //         .then(countries => setCountries(countries))
    // }



    return (
        <>

            <h1> I am the container</h1>
            <CountryList />


        </>
    )

}
export default CountryContainer;