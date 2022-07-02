import React from 'react';
import Home from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import QuizComponent from "./components/QuizComponent";
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="background">
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={< Home />} />
            </Routes>
          </Router>
          {/* <QuizComponent/> */}
        </div>
      </div>
    </>
  );
}

export default App;
