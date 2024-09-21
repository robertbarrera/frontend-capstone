import React from 'react';
import { Link } from 'react-router-dom';

const BookConfirm = () => {
    return (
        <section className='confirm container'>
            <article className='bg' >
                <h1 className='grnBG'>Success!</h1>
                <h2>Your booking has been <span>confirmed.</span></h2>
                <Link to="/" className="confirmLink"><button
                className='button' aria-label="On Click">Return Home</button></Link>
            </article>
        </section>
    );
}

export default BookConfirm;