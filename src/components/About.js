import React from 'react';
import personalbwc from '/Users/brianyoon/sei/projects/portfolio/src/personalbwc.jpeg';

function About(props) {
    return (
			<div id='About'>
				<img id='personalbwc' src={personalbwc} alt='' />
				<div id='About-Text'>
					<h1>
						<u>About Me</u>
					</h1>
					<h2>
						Full-stack web developer who loves NFTs and web3 technologies.
						<br />
						<br />
						My experience exploring the web3 landscape guides me in everything
						that I do: <br />
						making decisions in fast-paced development environments and
						<br />
						tunneling down on high priority problems in ambiguous situations.
					</h2>
				</div>
			</div>
		);
}

export default About;