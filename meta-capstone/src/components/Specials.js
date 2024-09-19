import Card from "./Card";

const Specials = () => {
    const foods = [
        {id: 1, type:"specials", image: "/greekSalad.jpg",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            title: "Greek Salad", price: "$ 12.99" },
        {id: 2, type:"specials", image: "/bruchetta.svg", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, and topped with locally grown tomatoes",
            title: "Bruschetta", price: "$ 5.99" },
        {id: 3, type:"specials", image: "/bistroSandwich.png", description: "A light and refreshing sandwich centered around a healthy serving of locally sourced turkey, topped with carmelized onions, wrapped in a fluffy brioche bun.",
             title: "Lemon Dessert", price: "$ 5.00" },
        {id: 4, type:"specials", image: "/lemonDessert.jpg", description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
                title: "Lemon Dessert", price: "$ 5.00" }
    ];
    return (
        <section className="container">
        <section className="specialsContainer">
            <section className="specialsHead">
            <h2>This Weeks Specials!</h2>
            <button className="specialsButton">Online Menu</button>
            </section>
            <section className="foods grid">
                {foods.map(food => (
                    <article key={food.id} className="bg">
                        <Card
                            type={food.type}
                            title={food.title}
                            image={food.image}
                            price={food.price}
                            description={food.description}
                        />
                    </article>
                ))}
            </section>
        </section>
        </section>
    );
}
export default Specials;