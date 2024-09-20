import React from 'react';
import { Link } from 'react-router-dom';

const BookConfirm = () => {
    return (
        <section className='confirm'>
            <article className='bg' >
                <h1>Success!</h1>
                <h2>Your booking has been <span>confrimed.</span></h2>
                <h3>Return <Link to="/" className="confrimLink">Home</Link></h3>
            </article>
        </section>
    );
}

export default BookConfirm;