import React from 'react';

const ListItem = ({ country, onCountryClick, handleCountryStudied, handleRemoveCountryStudied, selectedUser }) => {

    // function for handling what happens when list item is clicked
    // this will run the onCountry Click function, which sets the selectedCountry state in CountriesContainer
    const handleCountryClick = () => {
        onCountryClick(country);
    }

    const handleStudiedClick = () => {
      handleCountryStudied(country)
    }

    const handleRemoveStudiedClick = () => {
      handleRemoveCountryStudied(country)
    }


    return (
        <>
            <img src={country.flags.png} alt={country.name.common} onClick={handleCountryClick} />
            <h2 onClick={handleCountryClick}><b>{country.name.common}</b></h2>
            <button onClick={handleStudiedClick}>I've Studied this Country</button>
            <button onClick={handleRemoveStudiedClick}>Remove from my Studied List</button>
        </>
    )
}

export default ListItem;