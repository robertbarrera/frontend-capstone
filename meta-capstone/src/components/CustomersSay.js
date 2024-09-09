import Card from "./Card";

const CustomersSay = () => {
    const reviews = [
        { id: 1, type:"review", rating: 4.5, image: "", userName: "John Doe", description: "random review" },
        { id: 2, type:"review", rating: 4.8, image: "", userName: "Eve Evans", description: "random review" },
        { id: 3, type:"review", rating: 4.5, image: "", userName: "John Johnson", description: "random review" }
    ];

    return (
        <section className="reviewContainer">
            <h2>Testimonials</h2>
            <section className="reviews">
                {reviews.map(review => (
                    <article className="review" key={review.id}>
                        <Card
                            type={review.type}
                            rating={review.rating}
                            image={review.image}
                            userName={review.userName}
                            description={review.description}
                        />
                    </article>
                ))}
            </section>
        </section>
    );
};

export default CustomersSay;