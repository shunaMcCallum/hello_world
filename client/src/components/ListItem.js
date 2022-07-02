import React from 'react';

const ListItem = ({ country, onCountryClick }) => {

    // function for handling what happens when list item is clicked
    // this will run the onCountry Click function, which sets the selectedCountry state in CountriesContainer
    const handleClick = () => {
        onCountryClick(country);
    }


    return (
        <>

            <img src={country.flags.png} alt={country.name.common} onClick={handleClick} />
            <h2 onClick={handleClick}>{country.name.common}</h2>

        </>
    )
}

export default ListItem;