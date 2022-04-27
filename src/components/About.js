import React from 'react';
import personalc from '/Users/brianyoon/sei/projects/thinkaboutmovies.github.io/src/personalc.jpeg';

function About(props) {
    return (
			<div id='About'>
				<img src={personalc} alt='' />
                <div id='About-Text'>
                    <h1><u>About Me</u></h1>
                    <h2></h2>
                </div>
			</div>
		);
}

export default About;