import React, { useState, useEffect } from "react";
import Home from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuizComponent from "./components/QuizComponent";
import './Quiz.css';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div className="container">
      
        {/* <div id="clouds">
          <div className="cloud x3"></div>
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x4"></div>
          <div className="cloud x6"></div>
          <div className="cloud x5"></div>
          <div className="cloud x7"></div>
        </div> */}
      <div className="countries" id="cloud-intro">
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={< Home user={users[0]} setUsers={setUsers} />} />
              <Route path="/Quiz" element={<QuizComponent/>} />
            </Routes>
          </Router>
      </div>
      
      </div>
  );
}

export default App;
