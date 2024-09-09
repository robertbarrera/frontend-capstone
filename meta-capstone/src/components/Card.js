const Card = (props) => {
    const {type, rating = null, userName = null, image, description, title = null, price = null} = props;

    return (
        type==="review" ? (
            <section className="card reviewCard">
                {rating && <p>Rating: {rating}</p>}
                {image && <img src={image} alt="User who wrote this review" className="reviewImage" />}
                {userName && <p>{userName}</p>}
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
                {description && <p>{description}</p>}
            </section>
        )
    );
}

export default Card;