import React from 'react';

function PaginationDetail({ country, currentPage }) {

    // the next 5 functions determine what data is displayed on each page of the PaginationContainer
    const getPageOneData = () => {
        return (
            <>
                <h2>Capital City</h2>
                <p>{country.name.common}'s capital city is {country.capital}!</p>
            </>
        )
    };

    const getPageTwoData = () => {
        return (
            <>
                <h2>Population</h2>
                <p>The population of {country.name.common} is {country.population} people - wow that's loads!</p>
            </>
        )
    };

    const getPageThreeData = () => {
        return (
            <>
                <h2>Continent</h2>
                <p>{country.name.common} is part of the continent of {country.continent}.</p>
            </>
        )
    };

    const getPageFourData = () => {
        return (
            <>
                <h2>Currency</h2>
                <p>{country.name.common}'s current is called the {country.currencies.name}.</p>
                <p>It's symbol is {country.currencies.symbol}.</p>

            </>
        )
    };

    const getPageFiveData = () => {
        return (
            <>
                <h2>Area</h2>
                <p>The total area of {country.name.common} is {country.area} square metres.</p>
            </>
        )
    };

    // this function will call on the relevant function from above to match with the current page being viewed, using the currentPage prop
    // this function is triggered in the return below and will change the data being displayed depending on the currentPage number, which is
    // chosen by clicking the navigation buttons in the PaginationContainer
    const getPaginatedData = () => {
        if (currentPage === 1) {
            return getPageOneData();
        }
        else if (currentPage === 2) {
            return getPageTwoData();
        }
        else if (currentPage === 3) {
            return getPageThreeData();
        }
        else if (currentPage === 4) {
            return getPageFourData();
        }
        else if (currentPage === 5) {
            return getPageFiveData();
        }
    };

    return (
        <div>
            {/* the seleced country's name is displayed and the required data on that country is rendered using getPaginatedData */}
            <h1>{country.name.common}</h1>
            {getPaginatedData()}
        </div>
    );
};

export default PaginationDetail;