import React, {useReducer} from 'react'
import Specials from "./Specials";
import About from "./About"
import Homepage from './Homepage';
import Bookings from './Bookings';
import OrderOnline from "./OrderOnline";
import Login from './Login';
import BookConfirm from './ConfirmedBooking';
import {Route, Routes, useNavigate} from "react-router-dom";

const Main = () => {
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const initializeTimes = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

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