import React from 'react';

function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className='Footer'>
            <p>copyright@{currentYear}</p>
        </div>
    );
}

export default Footer;
