import React, { useState } from "react";
import NavBar from "../components/NavBar";
import CountryContainer from './CountryContainer';
import '../App.css';
import UserSelect from "../components/UserSelect";

const HomePage = ({users, onUserSelect}) => {

    const logIn = () => {
      
    }


    return (
        <div className="container">
            <NavBar />
            <h1 className="fun-title">Welcome! Please sign in or sign up for an account to access the countries!</h1>
            <UserSelect users={users} onUserSelect={onUserSelect} logIn={logIn} />
        </div>
    )
}


export default HomePage;