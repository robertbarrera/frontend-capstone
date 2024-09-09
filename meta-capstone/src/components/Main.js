import Specials from "./Specials";
import About from "./About"
import Homepage from './Homepage';
import Bookings from './Bookings';
import Login from './Login';
import {Route, Routes} from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Specials />}></Route>
                <Route path="/booking" element={<Bookings />}></Route>
                <Route path="/order" element={<orderOnline />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </main>
    );
}

export default Main;