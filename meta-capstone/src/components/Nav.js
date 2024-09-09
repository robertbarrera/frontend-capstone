import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" class="link">Home</Link></li>
                <li><Link to="/About" class="link">About</Link></li>
                <li><Link to="/Specials" class="link">Menu</Link></li>
                <li><Link to="/Bookings" class="link">Reservations</Link></li>
                <li><Link to="/OrderOnline" class="link">Order Online</Link></li>
                <li><Link to="/Login" class="link">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;