import React from 'react';
import './Home.css';
import billboard from '../../assetsblog1/billboard-logo.png';


const Home = () => {
    return (
        <>
            <h1>Bij Blogventure geloven we in de kracht van woorden</h1>
            <img src={billboard} alt="uithangbord met logo Blogventure" />
        </>
    );
};

export default Home;
