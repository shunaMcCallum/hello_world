import React from 'react';

function PaginationDetail({ country, currentPage }) {

    // the next 5 functions determine what data is displayed on each page of the PaginationContainer
    const getPageOneData = () => {
        return (
            <>
                <h2>Welcome to {country.name.common}</h2>
                <p>{country.name.common}'s official name is {country.name.official}</p>
                <p>It has a population of {country.population} people.</p>
                <p>The capital city is {country.capital}.</p>
                <img src={country.name.img} />
            </>
        )
    };

    const getPageTwoData = () => {
        return (
            <>
                <h2>Area</h2>
                <p>{country.name.common} is located in the continent of {country.continent}.</p>
                <p>Its area is {country.area} square metres.</p>
            </>
        )
    };

    const getPageThreeData = () => {
        return (
            <>
                <h2>Flag</h2>
                <img src={country.flags.png} />
                <p>{country.flags.meaning}</p>
            </>
        )
    };

    const getPageFourData = () => {
        return (
            <>
                <h2>Landmarks</h2>
                <p>{country.name.common}'s most famous landmarks include:</p>
                <p>{country.landmarks[0].name}</p>
                <img src={country.landmarks[0].img} />
                <p>{country.landmarks[1].name}</p>
                <img src={country.landmarks[1].img} />
            </>
        )
    };

    const getPageFiveData = () => {
        return (
            <>
                <h2>Fun Fact</h2>
                <h4>{country.funFact.header}</h4>
                <p>{country.funFact.fact}</p>
                <img src={country.funFact.img} />
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
            <img src={country.flags.png} alt={country.name.common} />
            {getPaginatedData()}
        </div>
    );
};

export default PaginationDetail;