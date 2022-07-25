import React, { useState, useEffect } from "react";
import CountryContainer from './containers/CountryContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizComponent from "./components/QuizComponent";
import Video from './components/Video';
import './Quiz.css';
import './App.css';
import Map from "./components/Map.js";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import UserService from "./services/UserService";


function App() {

  const [background, setBackground] = useState(true);

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [countries, setCountries] = useState([]);

  const loggedIn = window.localStorage.getItem('loggedIn');

  useEffect(() => {
    UserService.getUsers()
      .then(data => setUsers(data));
  }, [])

  useEffect(() => {
    fetch("http://localhost:9000/api/countries")
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])


  const toggleBackground = () => {
    if (background === true) {
      setBackground(false);
    } else {
      setBackground(true);
    }
  }

  const logOut = () => {
    setSelectedUser(null);
    window.localStorage.removeItem('loggedIn');
    window.location.href = "/";
  }


  return (
    <div className="container">
      {background ?
        <div id="cloud-intro">
          <div className="background-button-container">
            {loggedIn ? <button className="button-style" onClick={logOut}>Log Out</button> : 
            <div>
            <button className="button-style" onClick={toggleBackground}>Stop Clouds</button>
            <h1 className="headline">£ Hello, World! £</h1>
            </div>}
          </div>
          <Router>
            <Routes>
              <Route path="/" element={loggedIn ? <HomePage /> : <Login loggedIn={loggedIn} users={users} setUsers={setUsers} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />} />
              <Route path="/countries" element={<CountryContainer user={selectedUser} />} />
              <Route path="/quiz" element={<QuizComponent />} />
              <Route path="/map" element={<Map countries={countries} />} />
              <Route path="/singalong" element={<Video />} />
            </Routes>
          </Router>
        </div> :

        <div id="cloud-intro-stop">
          <div className="background-button-container">
            <button className="button-style" onClick={toggleBackground}>Start Clouds</button>
            <h1 className="headline">£ Hello, World! £</h1>
            {loggedIn ?
              <button className="button-style">Log Out</button> : 
              <div>
                <button className="button-style" onClick={toggleBackground}>Stop Clouds</button>
                <h1 className="headline">£ Hello, World! £</h1>
              </div>}
          </div>
          <Router>
            <Routes>
              <Route path="/" element={loggedIn ? <HomePage /> : <Login loggedIn={loggedIn} users={users} setUsers={setUsers} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />} />
              <Route path="/countries" element={<CountryContainer user={selectedUser} />} />
              <Route path="/quiz" element={<QuizComponent />} />
              <Route path="/map" element={<Map countries={countries} />} />
              <Route path="/singalong" element={<Video />} />
            </Routes>
          </Router>
        </div>}
    </div>
  );
}

export default App;


