import React from 'react'
import ListItem from './ListItem'


const CountryList = ({countries, onCountryClick}) => {

    const countriesItems = countries.map((country,index) => {
        return <ListItem country={country} key={index} onCountryClick={onCountryClick}/>
    })

    return (
        <div>
            <ul>
                {countriesItems}
            </ul>
        </div>
    )
}

export default CountryList;