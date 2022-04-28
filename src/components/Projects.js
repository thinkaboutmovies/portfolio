import React from 'react';
import RotatingArtGalleryScreenShot from '../images/RotatingArtGalleryScreenShot.png';

function Projects(props) {
    return (
        <div id='Projects'>
            <h2>Projects</h2>
            <div id='Projects-Card-List'>
                <div id='Rotating-Art-Gallery-Card'>
                    <img src={RotatingArtGalleryScreenShot} />
                    <h3>Rotating Art Gallery</h3>
                    <p>Dynamically view your NFTs as a rotating artshow</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;