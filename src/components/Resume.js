import React from 'react';
import resume from '../images/Resume.pdf';

function Resume(props) {
    return (
        <div id='Resume'>
            <a href={resume}>Resume PDF</a>
        </div>
    );
}

export default Resume;