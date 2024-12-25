import React from 'react';
import './Postdetail.css';
import {useParams} from 'react-router-dom';



const Postdetail = () => {

    const {postId} = useParams();

    return (
        <div>
            <h2>Dit is de blogpostdetail page nummer {postId}</h2>
        </div>
    );
};

export default Postdetail;