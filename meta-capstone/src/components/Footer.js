

const Footer = () => {
    return (
        <footer className="grid">
            <img src="/restaurant.jpg"
            alt="Little Lemon Restaurant" />
            <section>
                <h3>Doormat Navigation</h3>
                <nav>
                    <ul>
                        <li><a href="/home" className="link">Home</a></li>
                        <li><a href="/about" className="link">About</a></li>
                        <li><a href="/blog" className="link">Menu</a></li>
                        <li><a href="/reservations" className="link">Reservations</a></li>
                        <li><a href="/order" className="link">Order Online</a></li>
                        <li><a href="/login" className="link">Login</a></li>
                    </ul>
                </nav>
            </section>
            <section>
                <ul>
                    <li><h3>Contact</h3></li>
                    <li>12345 Lemon St, Chicago, IL</li>
                    <li>1(555) 555-5555</li>
                    <li>LittleLemon@gmail.com</li>
                </ul>
            </section>
            <section>
                <h3>Social Media Links</h3>
                <ul>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="link">Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="link">Instagram</a></li>
                        <li><a href="https://www.Facebook.com" target="_blank" rel="noreferrer" className="link">Facebook</a></li>
                    </ul>
            </section>
        </footer>
    );
}

export default Footer;