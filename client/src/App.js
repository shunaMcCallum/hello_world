import React, { useState, useEffect } from "react";
import Home from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizComponent from "./components/QuizComponent";
import Video from './components/Video';
import './Quiz.css';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [background, setBackground] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const toggleBackground = () => {
    if (background === true) {
      setBackground(false);
    } else {
      setBackground(true);
    }
  }

  return (
    <div className="container">
      {background ? <div className="countries" id="cloud-intro">
        <Router>
          <button className="background-button" onClick={toggleBackground}>Stop Moving Background</button>
          <Routes>
            <Route exact path="/" element={< Home user={users[0]} setUsers={setUsers} toggleBackground={toggleBackground} />} />
            <Route path="/Quiz" element={<QuizComponent />} />
            <Route path="/Singalong" element={<Video />} />
          </Routes>
        </Router>
      </div> :

        <div className="countries" id="cloud-intro-stop">
          <button className="background-button" onClick={toggleBackground}>Start Moving Background</button>
          <Router>
            <Routes>
              <Route exact path="/" element={< Home user={users[0]} setUsers={setUsers} toggleBackground={toggleBackground} />} />
              <Route path="/Quiz" element={<QuizComponent />} />
              <Route path="/Singalong" element={<Video />} />
            </Routes>
          </Router>
        </div>}
      </div>
  );
}

export default App;


