import React, { useEffect, useState } from 'react';
import PaginationDetail from '../components/PaginationDetail.js';


function PaginationContainer({ country, pageLimit }) {
    // state added here to track which page is being viewed and therefore what data to render
    // currentPage starts at 1 to render Page 1 by default
    const [currentPage, setCurrentPage] = useState(1);


    // this function links with the "next" button below, which adds one to the currentPage number
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    // this function links with the "previous" button below, which subtracts one from the currentPage number
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    // this function links with the "getPaginationGroup" function and linked buttons below
    // getPaginationGroup generates numbered buttons which allow the user to navigate to a specific page - the numbers on the buttons
    // change depending on what the currentPage is
    // changePage takes in the event created by clicking one of these buttons and sets the currentPage number to match the button clicked
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginationGroup = () => {
        // .floor method rounds the result of the calculation down to the previous whole number (e.g. 5.95 would round down to 5)
        // startingNumber calculates the first number to be displayed on the PaginationContainer's numbered navigation buttons
        let startingNumber = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        // a new array is created using the Array constructor - the elements of this array will populate the numbers on the PaginatinoContainer's navigation buttons
        // pageLimit is used to determine the number of elements that will go into the array - pageLimit was passed as props from CountryContainer
        // .fill sets the value of the elements - usually you would determine an index position to set to the new value, but here we use .map to
        // set all of the values at once
        // .map starts at the starting number and adds 1 to determine the value of the next element in the array - it'll then do the same thing
        // to that value, adding one and filling the array until its length has been filled
        return new Array(pageLimit).fill().map((_, index) => startingNumber + index + 1);
    };

    return (
        <div className="pagination-container">
            {/* PaginationDetail renders the specific country data we want to display on each page of the Pagination component
            the selected country is passed down as props so that it's data can be accessed
            the currentPage state is passed down as props so this can be matched with the data to be rendered on each page of the Pagination component */}
            <div>
                <PaginationDetail country={country} currentPage={currentPage} />
            </div>
            <div className="buttons">
                <div className="pagination-button">
                    {/* previous button - triggers the goToPreviousPage function when clicked */}
                    <button id="button-detail" onClick={goToPreviousPage}>prev</button>
                </div>
                <div className="pagination-button">
                    {/* numbered navigation buttons - each button triggers the changePage button when clicked
                the getPaginationGroup function is run here to determine which numbers are displayed on the buttons */}
                    {getPaginationGroup().map((item, index) => (
                        <button id="button-detail" key={index} onClick={changePage}><span>{item}</span></button>
                    ))}
                </div>
                <div className="pagination-button">
                    {/* next button - triggers the goToNextPage function when clicked */}
                    <button id="button-detail" onClick={goToNextPage}>next</button>
                </div>
            </div>
            <div className="back-button">
                <button id="button-detail" onClick={() => window.location.reload()}>Back</button>
            </div>
        </div>
    );
};

export default PaginationContainer;