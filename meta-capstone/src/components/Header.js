

const Header = ({children}) => {
    return (
        <header>
            <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png" 
            alt ="Little Lemon Logo"/>
            {children}
        </header>
    );
}

export default Header;