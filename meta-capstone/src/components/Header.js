import { Link } from "react-router-dom";

const Header = ({children}) => {
    return (
        <header>
            <section className="container">
            <Link to="/" className="link"><img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png" alt ="Little Lemon Logo"/></Link>
                {children}
            </section>
        </header>
    );
}

export default Header;