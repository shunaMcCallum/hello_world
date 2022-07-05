import React, { useState, useEffect } from "react";
import Home from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuizComponent from "./components/QuizComponent";
import './Quiz.css';
import './App.css';
import Map from "./map.js";


function App() {

  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([])

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



  return (
    <>
      <div className="container">
        <div className="background">
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={< Home user={users[0]} setUsers={setUsers} />} />
              <Route path="/Quiz" element={<QuizComponent />} />
              <Route path="/map" element={<Map countries={countries} />} />
            </Routes>
          </Router>
          {/* <QuizComponent/> */}
        </div>
      </div>
    </>
  );
}

export default App;
