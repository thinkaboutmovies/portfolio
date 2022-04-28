import React from 'react';
import GithubIcon from '/Users/brianyoon/sei/projects/portfolio/src/images/GitHub-Mark-64px.png';
import LinkedinIcon from '/Users/brianyoon/sei/projects/portfolio/src/images/linkedin.png';
import Envelope from '/Users/brianyoon/sei/projects/portfolio/src/images/envelope.png';

function Contact(props) {
    return (
			<div id='Contact'>
				{/* linkedin, github, email */}
				<a href='https://www.linkedin.com/in/brian-yoon-gm/' target='_blank' rel="noreferrer>
					<img src={LinkedinIcon} alt='' />
				</a>
				<a href='https://github.com/thinkaboutmovies' target='_blank' rel="noreferrer>
					<img src={GithubIcon} alt='' />
				</a>
				<a href='mailto:byoonweb3@example.com'>
					<img src={Envelope} alt='' />
				</a>
			</div>
		);
}

export default Contact;