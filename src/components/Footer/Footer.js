import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <div className='d-flex bg-dark justify-content-center text-light align-items-center ' id='footer' >
                <p><small>copyright &#169; {year}</small></p>
            </div>
        </div>
    );
};

export default Footer;