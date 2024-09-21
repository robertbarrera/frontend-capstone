const Card = (props) => {
    const {type, rating = null, userName = null, image, description, title = null, price = null} = props;

    return (
        type==="review" ? (
            <section className="card reviewCard">
                {rating && <h3>Rating: {rating}</h3>}
                {image && <img src={image} alt="User who wrote this review" className="reviewImage" />}
                {userName && <h4>{userName}</h4>}
                {description && <p>{description}</p>}
            </section>
        ) : (
            <section className="card specialsCard">
                {image && <img src={image} alt="One of this weeks special food items" className="specialsImage" />}
                {title && (
                    <article className="specialsHeading">
                        <h3>{title}</h3>
                        {price && <h3>{price}</h3>}
                    </article>
                )}

                <article className="specialsBody">
                    {description && <p>{description}</p>}
                    <article className="cardBottom">
                        <p><strong>Order a delivery</strong></p>
                        <img src="bike.jpg" alt="bike" className="specImg" />
                    </article>
                </article>
            </section>
        )
    );
}

export default Card;