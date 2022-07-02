import React from 'react';

function PaginationDetail({ country, currentPage }) {

    const getPageOneData = () => {
        return (
            <>
                <h2>Capital City</h2>
                <p>{country.capital}</p>
            </>
        )
    };

    const getPageTwoData = () => {
        return (
            <>
                <h2>Population</h2>
                <p>{country.population}</p>
            </>
        )
    };

    const getPaginatedData = () => {
        if (currentPage === 1) {
            return getPageOneData();
        }
        else {
            return getPageTwoData();
        }
    };

    return (
        <div>
            <h1>{country.name.common}</h1>
            {getPaginatedData()}
        </div>
    );
};

export default PaginationDetail;