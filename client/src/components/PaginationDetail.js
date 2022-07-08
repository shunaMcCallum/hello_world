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
    const stopSound = () => {
        sound.stop();
    }

    // the next 5 functions determine what data is displayed on each page of the PaginationContaine
    const getPageOneData = () => {
        return (
            <div className="pagination-detail">
                <h2>Welcome to {country.name.common}</h2>
                <p>{country.name.common}'s <b>official name</b> is {country.name.official}</p>
                <p>It has a <b>population</b> of {country.population.toLocaleString()} people.</p>
                <p>The <b>capital city</b> is {country.capital}.</p>
                <p>{country.name.common} is located in the <b>continent</b> of {country.continent}.</p>
                <img className="pagination-image" id="map-picture" src={country.name.img} />
            </div>
        )
    };

    const getPageTwoData = () => {
        return (
            <div className="pagination-detail">
                <h2>Audio</h2>
                <h4>National Anthem</h4>
                <p>Click the button below to hear {country.name.common}'s national anthem!</p>
                <div className="audio-button-container">
                    <button id="national-anthem-button" className="button-style" onClick={() => playSound(soundSrc)}> Play National Anthem </button>
                    <button id="stop-button" className="button-style" onClick={() => stopSound()}> Stop National Anthem </button>
                </div>
                <h4>Saying Hello</h4>
                <p>In {country.name.common}, to say "hello" you say "{country.hello}". Click the button below to hear how this sounds!</p>
                <div className="audio-button-container">
                    <button id="hello-button" className="button-style" onClick={() => playSound(soundSrc2)}> Say Hello </button>
                </div>
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
                
                <div className="picture">
                <img className="pagination-image" src={country.landmarks[0].img} />
                <div className="image-container">
                <p>{country.landmarks[0].name}</p>
                    </div>
                </div>

                <div className="picture" id="picture">
                <img className="pagination-image" src={country.landmarks[1].img} />
                <div className="image-container">
                <p>{country.landmarks[1].name}</p>
                </div>
            </div >
            </div>
        )
    };

    const getPageFiveData = () => {
        return (
            <div className="pagination-detail">
                <h2>Fun Fact</h2>
                <h4>{country.funFact.header}</h4>
                <p>{country.funFact.fact}</p>
                <img className="pagination-image"id="map-picture" src={country.funFact.img} />
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
            <img className="flag-image" id="flag-picture" src={country.flags.png} alt={country.name.common} />
            {getPaginatedData()}
        </div>
    );
};

export default PaginationDetail;