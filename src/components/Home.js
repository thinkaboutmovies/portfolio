import React from 'react';
// import background from '/Users/brianyoon/sei/projects/thinkaboutmovies.github.io/src/background.jpeg';

function Home(props) {
    return (
		<div id='Home' >
            <ul class='nav'>
                <li class='nav-element'><a href="#Home">Home</a></li>
                <li class='nav-element'> <a href="#About">About Me</a> </li>
                <li class='nav-element'><a href="#Skills">Skills</a></li>
                <li class='nav-element'><a href="#Contact">Contact Info</a></li>
                <li class='nav-element'><a href="#Projects">Projects</a></li>
                <li class='nav-element'><a href="#Resume">Resume</a></li>
            </ul>
				<div id='Home-Text'>
					<h1>Hello, I'm Brian Yoon</h1>
					<h3>and this is my Portfolio</h3>
				</div>
			</div>
		);
}

export default Home;