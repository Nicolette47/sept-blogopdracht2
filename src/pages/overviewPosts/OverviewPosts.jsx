import React from 'react';
import './OverviewPosts.css';
import axios from 'axios';
import {useEffect} from "react";
import {Link} from ' react-router-dom';


const OverviewPosts = () => {

    const [overviewPosts, setOverviewPosts] = React.useState([]);

    useEffect(() => {
        fetchPosts()
    }, []);

    async function fetchPosts() {
        try {
            const result = await axios.get('http://localhost:3000/posts');
            setOverviewPosts(result.data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Bekijk alle {overviewPosts.length} posts op het platform</h1>

            <ul>
                {overviewPosts.map((post) => {
                    return (
                        <li key={post.id} className="post-card">
                            <p><strong> <Link to>{post.title} </Link></strong>({post.author}) </p>
                            <p><em>{post.comments} reacties - {post.shares} keer gedeeld</em></p>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
};

export default OverviewPosts;