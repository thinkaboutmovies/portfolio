import React from 'react';


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
					<p>Hello, I'm <span class='bold-text'>Brian Yoon</span> </p>
					<p>and this is my Portfolio</p>
				</div>
			</div>
		);
}

export default Home;