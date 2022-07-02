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

  const checkIfCountryStudied = () => {
    for (let item of selectedUser.countries_studied) {
      if (item.name.common !== country.name.common) {
        return false
      } else {
        return true
      }
    }
  }


  return (

    <>
      {checkIfCountryStudied() ?
        <>
          <img src={country.flags.png} alt={country.name.common} onClick={handleCountryClick} />
          <h1 onClick={handleCountryClick}>{country.name.common}</h1>
          <p>STUDIED</p>
          <button onClick={handleRemoveStudiedClick}>Remove from my Studied List</button>
        </> :

        <>
          <img src={country.flags.png} alt={country.name.common} onClick={handleCountryClick} />
          <h3 onClick={handleCountryClick}>{country.name.common}</h3>
          <button onClick={handleStudiedClick}>Add to my Studied List</button>
        </>
      }
    </>
  )
}

export default ListItem;