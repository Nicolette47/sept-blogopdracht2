import React from 'react';
import './NewPost.css';


const NewPost = () => {

    //const [title, setTitle] = React.useState('');
   // const [subtitle, setSubTitle] = React.useState('');
    //const [author, setAuthor] = React.useState('');
    //const [blogpost, setBlogpost] = React.useState('');


    return (
        <>
            <form className="newblog-container">
                <label htmlFor="title-field">
                    Titel</label>
                <input
                    type="text"
                    id="title-field"
                    name="title"
                    //value={title}
                    //onChange={setTitle(e.target.value)}
                    required
                />


                <label htmlFor="subtitle-field">
                    Subtitle</label>
                <input
                    type="text"
                    id="subtitle-field"
                    name="subtitle"
                    //value={subtitle}
                    //onChange={setSubTitle(e.target.value)}
                    required
                />

                <label htmlFor="author-field">
                    Author</label>
                <input
                    type="text"
                    id="author-field"
                    name="author"
                    //value={author}
                    //onChange={setAuthor(e.target.value)}
                    required
                />

                <label htmlFor="content-field">
                    Blogpost</label>
                <textarea
                    id="content-field"
                    name="blogpost"
                    rows="13"
                    cols="98"
                    maxLength="2000"
                    minLength="300"
                    placeholder="schrijf hier je blog. Vereiste: minimaal 300 karakters, maximaal 2000."
                    //value={blogpost}
                    //onChange={setBlogpost(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Toevoegen</button>
            </form>
        </>
    );
};

export default NewPost;
