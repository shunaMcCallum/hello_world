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
    <>
      <div className="container">
        <div className="background">
          <Router>
            <NavBar />
            <Routes>

              <Route exact path="/" element={< Home user={users[0]} setUsers={setUsers} />} />

              <Route path="/Quiz" element={<QuizComponent/>} />
            </Routes>
          </Router>
          {/* <QuizComponent/> */}
        </div>
      </div>
    </>
  );
}

export default App;


