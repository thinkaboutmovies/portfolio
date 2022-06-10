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
					<article id='Rotating-Art-Gallery-Card'>
						<a
							href='https://github.com/thinkaboutmovies/rotating-art-gallery'
							target='_blank'
							rel='noreferrer'>
							<img src={RotatingArtGalleryScreenShot} alt='' />
						</a>
						<h3>Rotating Art Gallery</h3>
						<p>Dynamically view your NFTs as a rotating artshow.</p>
						<h4>Tech Used</h4>
						<p>
							React.js, Modulenft API, Framer Motion, Alice Carousel, CSS Grid,
							and Flexbox
						</p>
					</article>
					<article id='Pomodoro-App-Card'>
						<a
							href='https://github.com/Team-Clippers/Pomodoro-Frontend'
							target='_blank'
							rel='noreferrer'>
							<img src={PomodoroAppScreenShot} alt='' />
						</a>
						<h3>Pomodoro App</h3>
						<p>
							Set timers and track study and break sessions using time
							intervals.
						</p>
						<h4>Tech Used</h4>
						<p>React.js, Flexbox, Mongoose, Express, Node.js, and Cors</p>
					</article>
					<article id='Coin-Pouch-Card'>
						<a
							href='https://github.com/thinkaboutmovies/coin-pouch'
							target='_blank'
							rel='noreferrer'>
							<img src={CoinPouchScreenShot} alt='' />
						</a>
						<h3>Coin Pouch</h3>
						<p>How much does ETH does this NFT person have in their wallet?</p>
						<h4>Tech Used</h4>
						<p> React.js, Etherscan API, and CSS Grids</p>
					</article>
					<article id='Dinosaur-Pet-Card'>
						<a
							href='https://github.com/thinkaboutmovies/dinosaur-pets'
							target='_blank'
							rel='noreferrer'>
							<img src={DinosaurPetsScreenShot} alt='' />
						</a>
						<h3>Dinosaur Pet</h3>
						<p>Raise your own dinosaur to have a happy life.</p>
						<h4>Tech Used</h4>
						<p>Javascript, Jquery, HTML, CSS, Flexbox, and Bootstrap.</p>
					</article>
				</section>
			</div>
		);
}

export default Projects;