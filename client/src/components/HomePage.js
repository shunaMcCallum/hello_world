import React from "react";
import NavBar from "./NavBar";
import '../App.css';
import '../styling/HomePage.css';

const HomePage = () => {

    return (
        <div className="home-page-container">
            <NavBar />
            <h1 className="fun-title">Welcome Home!</h1>
            <h2>Welcome to Hello, World!</h2>
            <p className="home-page-para">This is an educational app all about countries of the world!</p>
            <p className="home-page-para">Have a look at the Countries tab for information on all of the countries. Then you can test yourself on the quiz and finally top it all off with a good old singalong!</p>
        </div>
    )
}


export default HomePage;