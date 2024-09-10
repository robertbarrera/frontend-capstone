import Hero from "./Hero";
import Specials from "./Specials"
import CustomersSay from "./CustomersSay"
import About from "./About";

const Homepage = () => {
    return (
        <>
            <Hero />
            <Specials />
            <CustomersSay />
            <About />
        </>
    );
}
export default Homepage;