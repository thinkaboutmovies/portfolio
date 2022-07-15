import React from 'react';
import RotatingArtGalleryScreenShot from '../images/RotatingArtGalleryScreenShot.png';
import CoinPouchScreenShot from '../images/CoinPouchScreenShot.png';
import DinosaurPetsScreenShot from '../images/DinosaurPetsScreenShot.png';
import PomodoroAppScreenShot from '../images/PomodoroAppScreenShot.png';

function Projects(props) {
    return (
			<div id='Projects'>
				<h2>Projects</h2>
				<section id='Projects-Card-List'>
					<article class='Project-Card' id='Rotating-Art-Gallery-Card'>
						<a
							href='https://rotating-art-gallery.netlify.app'
							target='_blank'
							rel='noreferrer'>
							<img src={RotatingArtGalleryScreenShot} alt='' />
						</a>
						<div class='Project-Card-Text'>
							<h3>Rotating Art Gallery</h3>
							<p>Dynamically view your NFTs as a rotating artshow.</p>
							<h4>Tech Used</h4>
							<p>
								React.js, Modulenft API, Framer Motion, Alice Carousel, CSS
								Grid, and Flexbox
							</p>
						</div>
					</article>
					<article class='Project-Card' id='Pomodoro-App-Card'>
						<a
							href='https://pomodoro176.netlify.app/'
							target='_blank'
							rel='noreferrer'>
							<img src={PomodoroAppScreenShot} alt='' />
						</a>
						<div class='Project-Card-Text'>
							<h3>Pomodoro App</h3>
							<p>
								Set timers and track study and break sessions using time
								intervals.
							</p>
							<h4>Tech Used</h4>
							<p>React.js, Flexbox, Mongoose, Express, Node.js, and Cors</p>
						</div>
					</article>
					<article class='Project-Card' id='Coin-Pouch-Card'>
						<a
							href='https://coinpouch.netlify.app'
							target='_blank'
							rel='noreferrer'>
							<img src={CoinPouchScreenShot} alt='' />
						</a>
						<div class='Project-Card-Text'>
							<h3>Coin Pouch</h3>
							<p>
								How much does ETH does this NFT person have in their wallet?
							</p>
							<h4>Tech Used</h4>
							<p> React.js, Etherscan API, and CSS Grids</p>
						</div>
					</article>
					<article class='Project-Card' id='Dinosaur-Pet-Card'>
						<a
							href='https://thinkaboutmovies.github.io/dinosaur-pets/'
							target='_blank'
							rel='noreferrer'>
							<img src={DinosaurPetsScreenShot} alt='' />
						</a>
						<div class='Project-Card-Text'>
							<h3>Dinosaur Pet</h3>
							<p>Raise your own dinosaur to have a happy life.</p>
							<h4>Tech Used</h4>
							<p>Javascript, Jquery, HTML, CSS, Flexbox, and Bootstrap.</p>
						</div>
					</article>
				</section>
			</div>
		);
}

export default Projects;