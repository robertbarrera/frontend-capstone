import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
<<<<<<< HEAD
            <ul className="navLinks">
                <li><a href="/home" className="link">Home</a></li>
                <li><a href="/about" className="link">About</a></li>
                <li><a href="/about" className="link">Menu</a></li>
                <li><a href="/blog" className="link">Reservations</a></li>
                <li><a href="/blog" className="link">Order Online</a></li>
                <li><a href="/blog" className="link">Login</a></li>
=======
            <ul>
                <li><Link to="/" class="link">Home</Link></li>
                <li><Link to="/About" class="link">About</Link></li>
                <li><Link to="/Specials" class="link">Menu</Link></li>
                <li><Link to="/Bookings" class="link">Reservations</Link></li>
                <li><Link to="/OrderOnline" class="link">Order Online</Link></li>
                <li><Link to="/Login" class="link">Login</Link></li>
>>>>>>> 6f64e693c8948b04f9bd588058df28649f09e026
            </ul>
        </nav>
    );
}

export default Nav;