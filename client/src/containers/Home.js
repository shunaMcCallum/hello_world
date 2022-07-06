import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import PaginationContainer from './PaginationContainer.js';
import UserService from '../services/UserService';
import NavBar from "../components/NavBar";

const Home = ({ user }) => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = () => {
        fetch("http://localhost:9000/api/countries")
            .then(res => res.json())
            .then(data => setCountries(data));
    }

    // function for sorting the countries alphabetically by its "name.common" key
    const sortedCountries = countries.sort(function (a, b) {
        return a.name.common.localeCompare(b.name.common)
    })

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

    // a button renders with the countries list which allows the user to note that they have studied a country
    // this function adds the country to a list of countries studied in the user's account so they can track what they've studied
    const addCountryStudied = (country) => {
        user.countries_studied.push(country)
        UserService.putUser(user._id, { countries_studied: user.countries_studied })
        UserService.getUsers()
        getCountries()
    }

    // this function does the opposite of the above - another button renders allowing the user to remove a country from their studied list
    const removeCountryStudied = (country) => {
        const array = []
        for (let item of user.countries_studied) {
            if (item.name.common !== country.name.common) {
                array.push(item)
            }
        }
        user.countries_studied = array;
        UserService.putUser(user._id, { countries_studied: user.countries_studied })
        UserService.getUsers()
        getCountries()
    }

    const handleClick = () => {
        window.location.reload();
    }

    return (
        <div>
            <NavBar handleClick={handleClick} />
            <div>
                <h1 className="fun-title">Fun with Flags!</h1>
                <div>
                    {selectedCountry ? <PaginationContainer country={selectedCountry} title="Paginated Content" pageLimit={5} /> : <CountryList countries={sortedCountries} onCountryClick={onCountryClick} handleCountryStudied={handleCountryStudied} handleRemoveCountryStudied={handleRemoveCountryStudied} user={user} />}
                </div>
            </div>


        </div>
    )
}


export default Home;




