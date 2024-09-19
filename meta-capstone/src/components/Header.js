

const Header = ({children}) => {
    return (
        <header>
            <section className="container">
                <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png" alt ="Little Lemon Logo"/>
                {children}
            </section>
        </header>
    );
}

export default Header;