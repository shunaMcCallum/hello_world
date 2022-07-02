import React from 'react';

const ListItem = ({ country, onCountryClick }) => {

    // function for handling what happens when list item is clicked
    // this will run the onCountry Click function, which sets the selectedCountry state in CountriesContainer
    const handleClick = () => {
        onCountryClick(country);
    }


    return (
        <>
            <div className='item'>
                <img className='flag-image' src={country.flags.png} alt={country.name.common} />
                <h2 className='homepage-h2'>{country.name.common}</h2>
            </div>
        </>
    )
}

export default ListItem;