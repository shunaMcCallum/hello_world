import React, { useState, useEffect } from "react";
import CountryContainer from './containers/CountryContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizComponent from "./components/QuizComponent";
import Video from './components/Video';
import './Quiz.css';
import './App.css';
import Map from "./components/Map.js";
import HomePage from "./containers/HomePage";


function App() {

  const [background, setBackground] = useState(true);

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);


  useEffect(() => {
    fetch("http://localhost:9000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])


  useEffect(() => {
    fetch("http://localhost:9000/api/countries")
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])

  const getCountries = () => {
    fetch("http://localhost:9000/api/countries")
      .then(res => res.json())
      .then(data => setCountries(data));
  }

  // sets the selected user - links through to user select component
  const onUserSelect = (user) => {
    setSelectedUser(user);
  }


  const toggleBackground = () => {
    if (background === true) {
      setBackground(false);
    } else {
      setBackground(true);
    }
  }

  return (
    <div className="container">
      {background ?
        <div className="countries" id="cloud-intro">
          <div className="background-button-container">
            <button className="button-style" onClick={toggleBackground}>Stop Clouds</button>
          </div>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage users={users} onUserSelect={onUserSelect} />} />
              <Route exact path="/User" element={< CountryContainer user={selectedUser} countries={countries} getCountries={getCountries} />} />
              <Route path="/Quiz" element={<QuizComponent />} />
              <Route path="/Map" element={<Map countries={countries} />} />
              <Route path="/Singalong" element={<Video />} />
            </Routes>
          </Router>
        </div> :

        <div className="countries" id="cloud-intro-stop">
          <div className="background-button-container">
            <button className="button-style" onClick={toggleBackground}>Start Clouds</button>
          </div>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage users={users} onUserSelect={onUserSelect} />} />
              <Route exact path="/User" element={< CountryContainer user={selectedUser} countries={countries} getCountries={getCountries} />} />
              <Route path="/Quiz" element={<QuizComponent />} />
              <Route path="/Map" element={<Map countries={countries} />} />
              <Route path="/Singalong" element={<Video />} />
            </Routes>
          </Router>
        </div>}
    </div>
  );
}

export default App;


