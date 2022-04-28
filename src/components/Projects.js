import React from 'react';
import RotatingArtGalleryScreenShot from '../images/RotatingArtGalleryScreenShot.png';
import CoinPouchScreenShot from '../images/CoinPouchScreenShot.png';
import DinosaurPetsScreenShot from '../images/DinosaurPetsScreenShot.png';
import PomodoroAppScreenShot from '../images/PomodoroAppScreenShot.png';

function Projects(props) {
    return (
        <div id='Projects'>
            <h2>Projects</h2>
            <div id='Projects-Card-List'>
                <div id='Rotating-Art-Gallery-Card'>
                    <img src={RotatingArtGalleryScreenShot} />
                    <h3>Rotating Art Gallery</h3>
                    <p>Dynamically view your NFTs as a rotating artshow.</p>
                </div>
                <div id='Pomodoro-App-Card'>
                    <img src={PomodoroAppScreenShot} />
                    <h3>Pomodoro App</h3>
                    <p>Set timers and track study and break sessions using time intervals. </p>
                </div>
                <div id='Coin-Pouch-Card'>
                    <img src={CoinPouchScreenShot} />
                    <h3>Coin Pouch</h3>
                    <p>How much does ETH does this NFT person have in their wallet?</p>
                </div>
                <div id='Dinosaur-Pet-Card'>
                    <img src={DinosaurPetsScreenShot} />
                    <h3>Dinosaur Pet</h3>
                    <p>Raise your own dinosaur to have a happy life.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;