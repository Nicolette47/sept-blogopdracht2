import React from 'react';
import './Postdetail.css';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect} from "react";
import {Link} from 'react-router-dom';
import dateCambio from '../../helpers/dateCambio.js';


const Postdetail = () => {
    const [blogDetail, setBlogDetail] = React.useState({});
    const [error, toggleError] = React.useState('');
    const [isDeleted, setIsDeleted] = React.useState(false);

    const {postId} = useParams();

    useEffect(() => {
        fetchBlog()
    }, []);

    async function fetchBlog() {
        toggleError(false);

        try {
            const result = await axios.get(`http://localhost:3000/posts/${postId}`);
            setBlogDetail(result.data);
        } catch (error) {
            console.error(error);
            toggleError(true);
        }
    }

    async function handleDeletePost() {
        try {
            await axios.delete(`http://localhost:3000/posts/${postId}`);
            setIsDeleted(true);
        } catch (error) {
            console.error(error);

        }
    }


    if (isDeleted) {
        return (
            <>
                <p>Deze blog is verwijderd</p>
                <p><Link to="/overviewposts">&lt; Terug naar de overzichtspagina</Link></p>
            </>
        );
    }

    return (
        <>

            {error &&
                <>
                    <p> Er is iets mis gegaan met het ophalen van de gegevens. Druk op deze knop om opnieuw te
                        proberen</p>
                    <button type="button" className="error-button" onClick={fetchBlog}>Klik hier</button>
                </>
            }


            {Object.keys(blogDetail).length > 0 && (
                <div className="blogdetail-container">

                    <>
                        <h1>{blogDetail.title}</h1>
                        <h2>{blogDetail.subtitle}</h2>
                        <p>Geschreven door {blogDetail.author} op {dateCambio(blogDetail.created)}</p>
                        <p>{blogDetail.content}</p>
                        <p>{blogDetail.comments} reacties - {blogDetail.shares} keer gedeeld</p>
                        <button
                            className="delete-button"
                            type="button"
                            onClick={() => {
                                handleDeletePost(postId)
                            }}
                        >
                            Verwijder deze blog
                        </button>


                        <p><Link to="/overviewposts">&lt; Terug naar de overzichtspagina</Link></p>
                    </>
                </div>
            )

            }
        </>
    );
};

export default Postdetail;