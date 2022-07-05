import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = ({ country, onCountryClick, handleCountryStudied, handleRemoveCountryStudied, user }) => {

  // function for handling what happens when list item is clicked
  // this will run the onCountry Click function, which sets the selectedCountry state in CountriesContainer
  const handleCountryClick = () => {
    onCountryClick(country);
  }

  // function triggers what happens when a user clickes "Add to my Studied List" button - runs the function in the user container which adds
  // this country to the user's countries_studied list
  const handleStudiedClick = () => {
    handleCountryStudied(country)
  }

  // function triggers the opposite of the above - when the "Remove from my Studied List button", runs the function in the user container which
  // removes this country from the user's countries_studied list
  const handleRemoveStudiedClick = () => {
    handleRemoveCountryStudied(country)
  }

  // function checks whether this country is included in the user's countries_studied list, and in the return below it determines how the
  // country is displayed in the browser - countries that have been studied will display differently to those that have not been studied
  const checkIfCountryStudied = () => {
    for (let i = 0; i < user.countries_studied.length; i++) {
      if (user.countries_studied[i].name.common === country.name.common) {
        return true;
      }
    }
  }

  return (

    // the code below says "if a country has been studied, display the first div - if a country has NOT been studied, display the second div"
    <>
      {checkIfCountryStudied() ?
        <div className='item'>
          <img className='flag-image' src={country.flags.png} alt={country.name.common} onClick={handleCountryClick} />
          <h2 className="homepage-h2" onClick={handleCountryClick}><FontAwesomeIcon icon={faStar} beat className="star" /> {country.name.common} <FontAwesomeIcon icon={faStar} beat className="star" /></h2>
          <button id="studied-list-button" className="button-style" onClick={handleRemoveStudiedClick}>Remove from my Studied List</button>
        </div> :

        <div className='item'>
          <img className='flag-image' src={country.flags.png} alt={country.name.common} onClick={handleCountryClick} />
          <h2 className="homepage-h2" onClick={handleCountryClick}>{country.name.common}</h2>
          <button id="studied-list-button" className="button-style" onClick={handleStudiedClick}>Add to my Studied List</button>
        </div>
      }
    </>
  )
}

export default ListItem;