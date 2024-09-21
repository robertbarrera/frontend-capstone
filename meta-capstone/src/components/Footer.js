import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="grnBG">
            <section className= "container grid">
            <img src="/restaurant.jpg"
            alt="Little Lemon Restaurant" />
            <section className="footerSection">
                <h3>Doormat Navigation</h3>
                <nav>
                    <ul className="footerList">
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/about" className="link">About</Link></li>
                        <li><Link to="/menu" className="link">Menu</Link></li>
                        <li><Link to="/bookings" className="link">Reservations</Link></li>
                        <li><Link to="/order" className="link">Order Online</Link></li>
                        <li><Link to="/login" className="link">Login</Link></li>
                    </ul>
                </nav>
            </section>
            <section className="footerSection">
                <ul className="footerList">
                    <li><h3>Contact</h3></li>
                    <li>12345 Lemon St, Chicago, IL</li>
                    <li>1(555) 555-5555</li>
                    <li>LittleLemon@gmail.com</li>
                </ul>
            </section>
            <section className="footerSection">
                <h3>Social Media Links</h3>
                <ul className="footerList">
                        <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="link">Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="link">Instagram</a></li>
                        <li><a href="https://www.Facebook.com" target="_blank" rel="noreferrer" className="link">Facebook</a></li>
                    </ul>
            </section>
            </section>
        </footer>
    );
}

export default Footer;