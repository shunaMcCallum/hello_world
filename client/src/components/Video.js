import React from 'react';
import ReactPlayer from 'react-player';
import NavBar from "../components/NavBar";

const Video = () => {


    return (
        <div> 
            <NavBar />
            <div className="video-container">
                <div><ReactPlayer className="video" url="https://www.youtube.com/watch?v=V1508wboZXk" controls={true} /></div>
            </div>
        </div>

    );
};

export default Video;