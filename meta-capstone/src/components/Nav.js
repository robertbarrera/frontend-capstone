

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" class="link">Home</Link></li>
                <li><a href="/about" class="link">About</a></li>
                <li><a href="/about" class="link">Menu</a></li>
                <li><a href="/blog" class="link">Reservations</a></li>
                <li><a href="/blog" class="link">Order Online</a></li>
                <li><a href="/blog" class="link">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;