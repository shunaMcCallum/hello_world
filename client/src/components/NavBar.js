import React from "react";
import { Link } from "react-router-dom";

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
                        £ Hola, Welt! £
                    </h1>
                </header>
            </div>
        </>
    )
}

export default NavBar;




