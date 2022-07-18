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
                        <Link to="/Quiz">Quiz</Link>
                    </li>

                    <li>
                        <Link to="/Map">Map</Link>
                    </li>
                    <li>
                        <Link to="/Singalong">Singalong</Link>

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




