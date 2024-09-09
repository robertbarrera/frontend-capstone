import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="navLinks">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/About" className="link">About</Link></li>
                <li><Link to="/Specials" className="link">Menu</Link></li>
                <li><Link to="/Bookings" className="link">Reservations</Link></li>
                <li><Link to="/OrderOnline" className="link">Order Online</Link></li>
                <li><Link to="/Login" className="link">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;