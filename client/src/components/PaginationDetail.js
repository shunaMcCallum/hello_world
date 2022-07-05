import React from 'react';
import { Howl } from 'howler';

function PaginationDetail({ country, currentPage }) {

    const soundSrc = country.nationalAnthem;  //  "/mexico.mp3"
    const soundSrc2 = country.helloAudio;  //  "/hola.mp3"
    let sound;

    const playSound = (src) => {
        sound = new Howl({ src });
        sound.play();                     
    };
    const stopSound = (src) => {
        sound.stop();
    }

    // the next 5 functions determine what data is displayed on each page of the PaginationContaine
    const getPageOneData = () => {
        return (
            <div className="pagination-detail">
                <h2>Welcome to {country.name.common}</h2>
                <p>{country.name.common}'s official name is {country.name.official}</p>
                <p>It has a population of {country.population} people.</p>
                <p>The capital city is {country.capital}.</p>
                <p>{country.name.common} is located in the continent of {country.continent}.</p>
                <img className="pagination-image" src={country.name.img} />
            </div>
        )
    };

    const getPageTwoData = () => {
        return (
            <div className="pagination-detail">
                <h2>Audio</h2>
                <h4>National Anthem</h4>
                <p>Click the button below to hear {country.name.common}'s national anthem!</p>
                <button onClick={() => playSound(soundSrc)}> National Anthem </button>
                <button onClick={() => stopSound(soundSrc)}> Stop </button>

                <h4>Saying Hello</h4>
                <p>In {country.name.common}, to say "hello" you say "{country.hello}". Click the button below to hear how this sounds!</p>
                <button onClick={() => playSound(soundSrc2)}> Say Hello </button>
            </div>
        )
    };

    const getPageThreeData = () => {
        return (
            <>
            <div className="pagination-detail">
                <h2>Flag</h2>
                <p>{country.flags.meaning}</p>
            </div> 
            </>
        )
    };

    const getPageFourData = () => {
        return (
            <div className="pagination-detail">
                <h2>Landmarks</h2>
                <p>{country.name.common}'s most famous landmarks include:</p>
                <p>{country.landmarks[0].name}</p>
                <img className="pagination-image" src={country.landmarks[0].img} />
                <p>{country.landmarks[1].name}</p>
                <img className="pagination-image" src={country.landmarks[1].img} />
            </div>
        )
    };

    const getPageFiveData = () => {
        return (
            <div className="pagination-detail">
                <h2>Fun Fact</h2>
                <h4>{country.funFact.header}</h4>
                <p>{country.funFact.fact}</p>
                <img className="pagination-image" src={country.funFact.img} />
            </div>
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
            <img className="flag-image" src={country.flags.png} alt={country.name.common} />
            {getPaginatedData()}
        </div>
    );
};

export default PaginationDetail;