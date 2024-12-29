import React from 'react';
import './NewPost.css';
import calculateReadTime from "../../helpers/calculateReadTime.js";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";


const NewPost = () => {

    const [formState, setFormState] = React.useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    const [blogPost, setBlogPost] = React.useState({});
    const [error, setError] = React.useState('');

    //  const navigate =useNavigate();


    function handleChange(e) {
        const changeFieldName = e.target.name;

        setFormState({
            ...formState,
            [changeFieldName]: e.target.value,
        });

    }


    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        console.log(formState);

        const allData = {
            ...formState,
            readTime: calculateReadTime(formState.content),
            created: new Date().toISOString(),
            shares: 0,
            comments: 0,
        };

        console.log(allData);

        try {
            const result = await axios.post('http://localhost:3000/posts', allData)
            console.log(result)
            setBlogPost(result.data);
        } catch (error) {
            console.error(error);
            setError(true);

        }
        //navigate("/");
    }


    return (
        <>
            {Object.keys(blogPost).length > 0 ? (

                    <p>De blogpost is succesvol toegevoegd. Je kunt deze <Link
                        to={`/postdetail/${blogPost.id}`}>hier</Link> bekijken</p>) :
                (
                    <>
                        {error &&
                            <p className="error-message2">Er is iets misgegaan met het toevoegen van je blog. Probeer opnieuw</p>}


                        <form className="newblog-container" onSubmit={handleSubmit}>
                            <label htmlFor="title-field">
                                Titel</label>
                            <input
                                type="text"
                                id="title-field"
                                name="title"
                                value={formState.title}
                                onChange={handleChange}
                                required
                            />


                            <label htmlFor="subtitle-field">
                                Subtitle</label>
                            <input
                                type="text"
                                id="subtitle-field"
                                name="subtitle"
                                value={formState.subtitle}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="author-field">
                                Author</label>
                            <input
                                type="text"
                                id="author-field"
                                name="author"
                                value={formState.author}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="content-field">
                                Blogpost</label>
                            <textarea
                                id="content-field"
                                name="content"
                                rows="13"
                                cols="98"
                                maxLength="2000"
                                minLength="300"
                                placeholder="schrijf hier je blog. Vereiste: minimaal 300 karakters, maximaal 2000."
                                value={formState.content}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <button type="submit">Toevoegen</button>
                        </form>
                    </>
                )
            }

        </>
    );
};

export default NewPost;
