import classes from "./Header.module.scss"

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.inner_cont}>
                <div>
                    <h2>About our Restaurant</h2>
                    <div className={classes.wrapper}>
                        <div className={classes.blur}></div>
                        <div className={classes.text_cont}>
                            <p>
                                Welcome to DUA Italian Cuisine & Steakhouse – Where tradition meets taste in a divine
                                fusion
                                of
                                authentic Italian flavors and meticulously selected Zabiha Halal meats. Nestled in the
                                heart
                                of
                                culinary innovation, DUA isn’t just a restaurant; it’s a destination for those who
                                appreciate
                                the finer nuances of Italian cuisine complemented by the purity and ethics of Zabiha
                                Halal
                                practices. Our menu is a testament to our commitment to quality and authenticity,
                                featuring
                                a
                                wide range of Italian classics from handcrafted pasta to sumptuous steaks, all prepared
                                with
                                the
                                freshest ingredients and a touch of culinary artistry. At DUA, we believe in catering to
                                every
                                palate with a selection of dishes that are as nourishing for the soul as they are for
                                the
                                body.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;