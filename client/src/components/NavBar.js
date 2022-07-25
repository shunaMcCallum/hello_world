import React from "react";
import { Link } from "react-router-dom";
import '../styling/NavBar.css';

const NavBar = () => {


    return (
        <>

            <div className="NavBar">
                <ul>

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/countries">Countries</Link>
                    </li>

                    <li>
                        <Link to="/quiz">Quiz</Link>
                    </li>

                    <li>
                        <Link to="/map">Map</Link>
                    </li>
                    <li>
                        <Link to="/singalong">Singalong</Link>

                    </li>
                </ul>
            </div>

            <div>
                <header>
                    <h1 className="headline">
                        £ Hello, World! £
                    </h1>
                </header>
            </div>
        </>
    )
}

export default NavBar;




