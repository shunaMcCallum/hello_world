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
                        <Link to="/map">Map</Link>
                    </li>
                </ul>
            </div>

            <div>

                <header>
                    <h1 className="airways">
                        Hello, World!
                    </h1>
                </header>
            </div>
        </>
    )
}

export default NavBar;




