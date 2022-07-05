import React from "react";
import { Link, Route } from "react-router-dom";
import UserService from '../services/UserService';


const NavBar = ({ handleClick }) => {

    // const handleClick = () => {
    //     window.location.reload();
    // }

    return (


        <>


            <div className="NavBar">


                <ul>
                    <li>
                        <Link to="/" onClick={handleClick}>Home</Link>
                    </li>

                    <li>
                        <Link to="/Quiz">Quiz</Link>
                    </li>
                </ul>
            </div>

            <div>

                <header>
                    <h1 className="headline">
                        Hello, World!
                    </h1>
                </header>
            </div>
        </>
    )
}

export default NavBar;




