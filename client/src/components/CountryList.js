import React from 'react'
import ListItem from './ListItem'

// onCountryClick function not actually used in this component but is passed down to ListItem
const CountryList = ({ countries, onCountryClick, handleCountryStudied, handleRemoveCountryStudied, user }) => {
    
    const sortedCountries = countries.map((country) => {
        const array = []
        array.push(country)
        return array
    });


    // let array = sortedCountries.sort(function (a, b) {
    //     return a.name.common - b.name.common
    // })
        

    
    const countriesItems = countries.map((country, index) => {
        return <ListItem country={country} key={index} onCountryClick={onCountryClick} handleCountryStudied={handleCountryStudied}
            handleRemoveCountryStudied={handleRemoveCountryStudied} user={user} />
    })

    return (
        <>
            <div>
                {countriesItems}
                {console.log(countries)}
            </div>
            
        </>
    )
}

export default CountryList;