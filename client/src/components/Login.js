import React, { useState } from 'react';
import '../App.css';
import PropTypes from 'prop-types';


export default function Login({ users, setSelectedUser, selectedUser, loggedIn }) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [countries_studied, setCountries_studied] = useState([]);
    const [buttons, setButtons] = useState(true);
    const [logIn, setLogIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    let nameOk = null;
    const [nameNotOk, setNameNotOk] = useState(false);
    let passwordOk = null;
    const [passwordNotOk, setPasswordNotOk] = useState(false);


    async function loginUser(credentials) {
        return fetch('http://localhost:9000/api/users/', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json());
    }


    const getUser = () => {
        for (let x of users) {
            if (x.name === name) {
                return x;
            }
        }
    }

    const checkUserName = () => {
        for (let x of users) {
            if (name === x.name) {
                nameOk = true;
            }
        }
        if (nameOk === null) {
            setNameNotOk(true);
        }
    }

    const checkPassword = () => {
        for (let x of users) {
            if (password === x.password) {
                passwordOk = true;
            }
        }
        if (passwordOk === null) {
            setPasswordNotOk(true);
        }
    }

    const handleSubmitLogIn = e => {
        e.preventDefault();
        checkUserName();
        checkPassword();

        if (nameOk === true && passwordOk === true) {
            const thisUser = getUser()
            setSelectedUser(thisUser)
            window.localStorage.setItem('loggedIn', true);
            loggedIn = true;
            window.sessionStorage.setItem('token', JSON.stringify(selectedUser));
        }
    }

    const handleSubmitSignUp = async e => {
        e.preventDefault();
        const user = await loginUser({ name, password, countries_studied });
        setSelectedUser(user);
        window.localStorage.setItem('loggedIn', true);
    }

    const logInClick = () => {
        setLogIn(true);
        setButtons(false);
    }

    const signUpClick = () => {
        setSignUp(true);
        setButtons(false);
    }


    return (
        <div className="container">
            {buttons ?
                <div>
                    <button className="button-style" onClick={logInClick}>Log in</button>
                    <button className="button-style" onClick={signUpClick}>Sign up</button>
                </div> : null}

            {logIn ?
                <div className="container">
                    <h1>Please Log In</h1>
                    <form onSubmit={handleSubmitLogIn}>
                        <label>
                            <p>Name</p>
                            <input type="text" onChange={e => setName(e.target.value)} />
                        </label>
                        {nameNotOk ? <p>Username incorrect, please try again.</p> : null}
                        <label>
                            <p>Password</p>
                            <input type="password" onChange={e => setPassword(e.target.value)} />
                        </label>
                        {passwordNotOk ? <p>Password incorrect, please try again.</p> : null}
                        <div>
                            <button className="button-style" type="submit">Log in</button>
                        </div>
                    </form>
                </div> :
                <div>
                </div>}

            {signUp ?
                <div className="container">
                    <h1>Please Log In</h1>
                    <form onSubmit={handleSubmitSignUp}>
                        <label>
                            <p>Name</p>
                            <input type="text" onChange={e => setName(e.target.value)} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" onChange={e => setPassword(e.target.value)} />
                        </label>
                        <div>
                            <button className="button-style" type="submit">Sign up</button>
                        </div>
                    </form>
                </div> :
                <div>
                </div>}

        </div>
    )
}

Login.propTypes = {
    setSelectedUser: PropTypes.func.isRequired
};
