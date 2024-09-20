import React, { useState } from 'react';

const BookForm = (props) => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    };

    return (
        <section className='bookForm'>
            <h1>Make a Reservation:</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <article className='formElement'>
                        <label htmlFor="date">Choose a Date: </label>
                        <input
                            id='date'
                            name='date'
                            value={date}
                            required
                            onChange={handleChange}  // Passing event object correctly
                            type='date'
                        />
                    </article>

                    <article className='formElement'>
                        <label htmlFor="time">Choose a Time: </label>
                        <select
                            id="time"
                            name="time"
                            value={times}
                            onChange={(e) => setTimes(e.target.value)}
                        >
                            <option value="">Choose a Time</option>
                            {props.availableTimes.availableTimes.map((availableTime) => (
                                <option key={availableTime}>{availableTime}</option>
                            ))}
                        </select>
                    </article>

                    <article className='formElement'>
                        <label htmlFor="guests">Number of Guests: </label>
                        <input
                            id='guests'
                            name='guests'
                            min="1"
                            value={guests}
                            required
                            onChange={(e) => setGuests(e.target.value)}
                        />
                    </article>

                    <article className='formElement'>
                        <label htmlFor="occasion">Choose an Occasion: </label>
                        <select
                            id='occasion'
                            name='occasion'
                            value={occasion}
                            required
                            onChange={(e) => setOccasion(e.target.value)}
                        >
                            <option value="">Occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="engagement">Engagement</option>
                        </select>
                    </article>

                    <article>
                        <input type='submit' className='formButton' value='Reserve Now' />
                    </article>
                </fieldset>
            </form>
        </section>
    );
};

export default BookForm;