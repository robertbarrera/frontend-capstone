const Hero = () => {
    return (
        <section className="hero">
            <section className="container">
                <article className="heroText">
                    <article className="heroHead">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </article>
                    <p>We are a family owned Meditteranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </article>
                <article className="heroImg">
                    <img src="/littleLemonHero.jpg" alt="Little Lemon restaurant" />
                </article>
            </section>
        </section>
    );
}
export default Hero;