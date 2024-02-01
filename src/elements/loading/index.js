import React from 'react';
import loadingGif from '../../images/loading-site.gif';

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <img src={loadingGif} alt="logo" className="loading-logo"/>
            <div className="loading-animation">
                Ładowanie Strony...
            </div>
        </div>
    );
}

export default LoadingScreen;