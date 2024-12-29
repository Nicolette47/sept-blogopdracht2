import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';
import logo from '../../assetsblog1/logo-white.png';


function NotFound() {
    return (
        <div className="notfound-page">
        <p>Oeps er ging iets mis!! Klik <Link to="/">hier</Link> om terug te gaan naar de home page</p>
            <img src={logo} alt="logo van bedrijf" />
        </div>
    )
}

export default NotFound;