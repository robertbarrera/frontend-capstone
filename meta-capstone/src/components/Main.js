import React, {useReducer} from 'react'
import Specials from "./Specials";
import About from "./About"
import Homepage from './Homepage';
import Bookings from './Bookings';
import OrderOnline from "./OrderOnline";
import Login from './Login';
import BookConfirm from './BookConfirm';
import {Route, Routes, useNavigate} from "react-router-dom";

const Main = () => {

    const fetchAPI = function(date) {
        let result = [];
        for (let i = 12; i <= 19; i++) {
            // Push both times for each hour
            result.push(i + ':00');
            result.push(i + ':30');
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    }

    const initialState = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())}
    }

    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)){
            navigate("/BookConfirm");
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Specials />}></Route>
                <Route path="/bookings" element={<Bookings availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}></Route>
                <Route path="/order" element={<OrderOnline />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/BookConfirm" element={<BookConfirm />} />
            </Routes>
        </main>
    );
}

export default Main;