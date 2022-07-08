import React from 'react';
import ReactPlayer from 'react-player';
import NavBar from "../components/NavBar";

const Video = () => {


    return (
        <div> 
            <NavBar />
            <div >
                <div>
                    <h1 className="fun-title">A Sing-a-long!</h1>
                </div>
                <div className="video-container">
                    <div className="video">
                        <ReactPlayer url="https://www.youtube.com/watch?v=V1508wboZXk" controls={true} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Video;