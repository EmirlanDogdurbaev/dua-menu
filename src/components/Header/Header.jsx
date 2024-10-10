import classes from "./Header.module.scss"

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.inner_cont}>
                <div>
                    <h2>About us</h2>
                    <span className={classes.small_line}></span>
                    <p>
                        We serve amazing dishes with authentic and signature taste! We serve pasta, pizza, salads, prime
                        cut
                        steaks and more... we also have our coffee shop which we serve one of the best roasted coffee.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;