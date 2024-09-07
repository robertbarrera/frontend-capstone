

const Footer = () => {
    return (
        <footer>
            <img src="/restaurant.jpg"
            alt="Little Lemon Restaurant" />
            <section class="doormat">
                <h3>Doormat Navigation</h3>
                <nav>
                    <ul class="footerNav">
                        <li><a href="/home" class="link">Home</a></li>
                        <li><a href="/about" class="link">About</a></li>
                        <li><a href="/blog" class="link">Menu</a></li>
                        <li><a href="/reservations" class="link">Reservations</a></li>
                        <li><a href="/order" class="link">Order Online</a></li>
                        <li><a href="/login" class="link">Login</a></li>
                    </ul>
                </nav>
            </section>
            <section>
                <h3>Contact</h3>
                <p>12345 Lemon St, Chicago, IL</p>
                <p>1(555) 555-5555</p>
                <p>LittleLemon@gmail.com</p>
            </section>
            <section>
                <h3>Social Media Links</h3>
                <ul class="socials">
                        <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer" class="link">Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" class="link">Instagram</a></li>
                        <li><a href="https://www.Facebook.com" target="_blank" rel="noreferrer" class="link">Facebook</a></li>
                    </ul>
            </section>
        </footer>
    );
}

export default Footer;