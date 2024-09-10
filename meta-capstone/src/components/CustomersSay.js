import Card from "./Card";

const CustomersSay = () => {
    const reviews = [
        { id: 1, type:"review", rating: 4.5, image: "/defaultAvatar.jpg", userName: "John Doe", description: "My family adn I love coming to Little Lemon to enjoy the great food, great atmosphere, and great people!" },
        { id: 2, type:"review", rating: 4.8, image: "/defaultAvatar.jpg", userName: "Eve Evans", description: "Great bistro that acts as my favorite getaway from a busy life. The weekly specials on food and drinks are always amazing." },
        { id: 3, type:"review", rating: 4.5, image: "/defaultAvatar.jpg", userName: "John Johnson", description: "Came to Little Lemon based on the recommendation of a friend and it definitely worth the trip, i will be coming back!" },
        { id: 4, type:"review", rating: 4.5, image: "/defaultAvatar.jpg", userName: "John Johnson", description: "It's so nice having a restaurant nearby that cares about sourcing ingredients locally, Mario and Adrian really care about the food they put out!" }
    ];

    return (
        <section className="reviewContainer">
            <h2>Testimonials</h2>
            <section className="reviews grid">
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