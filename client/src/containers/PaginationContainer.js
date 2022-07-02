import React, { useEffect, useState } from 'react';
import PaginationDetail from '../components/PaginationDetail.js';

function PaginationContainer({ country, title, pageLimit }) {
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div>
            <h1>{title}</h1>
            <div>
                {/* <h4>{country.name.common}</h4> */}
                <PaginationDetail country={country} currentPage={currentPage} />
            </div>
            <div>
                <button onClick={goToPreviousPage}>prev</button>
            </div>
            <div>
                {getPaginationGroup().map((item, index) => (
                    <button key={index} onClick={changePage}><span>{item}</span></button>
                ))}
            </div>
            <div>
                <button onClick={goToNextPage}>next</button>
            </div>
        </div>
    );
};

export default PaginationContainer;