import React from 'react';
import ReactPlayer from 'react-player';
import NavBar from "../components/NavBar";

const Video = () => {


    return (
        <div>
            <NavBar />
            <div className="video">
                <ReactPlayer url="https://www.youtube.com/watch?v=V1508wboZXk" controls={true} />
            </div>
        </div>

    );
};

export default Video;