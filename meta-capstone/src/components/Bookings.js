import React from 'react';
import BookForm from './BookForm';

const Bookings = (props) => {

return (
    <BookForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
  );
};

export default Bookings;


