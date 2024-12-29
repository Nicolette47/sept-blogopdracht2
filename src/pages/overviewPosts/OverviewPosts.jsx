import React from 'react';
import './OverviewPosts.css';
import axios from 'axios';
import {useEffect} from "react";
import {Link} from 'react-router-dom';


const OverviewPosts = () => {

    const [overviewPosts, setOverviewPosts] = React.useState([]);
    const [error, toggleError] = React.useState('');

    useEffect(() => {
        fetchPosts()
    }, []);

    async function fetchPosts() {
        toggleError(false);
        try {
            const result = await axios.get('http://localhost:3000/posts');
            setOverviewPosts(result.data);

        } catch (error) {
            toggleError(true);
        }
    }

    return (

        <>
            <h1>Bekijk alle {overviewPosts.length} posts op het platform</h1>

            {error &&
                <> <p> Er is iets mis gegaan met het ophalen van de gegevens. Druk op deze knop om opnieuw te
                    proberen</p>
                    <button type="button" className="error-button" onClick={fetchPosts}>Klik hier</button>
                </>}

            {overviewPosts.length > 0 &&
            <ul>
                {overviewPosts.map((post) => {
                    return (
                        <li key={post.id} className="post-card">
                            <p><Link to={`/postdetail/${post.id}`}
                                     className="blog-title">{post.title}</Link> ({post.author})</p>
                            <p><em>{post.comments} reacties - {post.shares} keer gedeeld</em></p>
                        </li>
                    );
                })}
            </ul>
            }
        </>
    );
};

export default OverviewPosts;