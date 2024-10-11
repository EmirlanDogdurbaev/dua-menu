import classes from "./Card.module.scss"

// eslint-disable-next-line react/prop-types
const Card = ({title, price, image}) => {
    return (
        <article className={classes.card}>
            <img
                src={image}
                alt={title}
                width="250"
                height="290"/>
            <aside>
                <h4>{title}</h4>
                <p>
                    {price}$
                </p>
            </aside>
        </article>
    )
}

export default Card;