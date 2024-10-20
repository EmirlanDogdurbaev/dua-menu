// eslint-disable-next-line react/prop-types
import Nav from "../Nav/Nav.jsx";
import Header from "../Header/Header.jsx";
import classes from "./Layout.module.scss";
import {Logo} from "../Logo/Logo.jsx";
import Events from "../Events/Events.jsx";
import Cards from "../Cards/Cards.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Gallery from "../Gallery/Gallery.jsx";

// eslint-disable-next-line react/prop-types
const Layout = () => {
    return (
        <div className={classes.Layout}>
            <div className={classes.navbar}>
                <Nav/>
                <section>
                    <Logo/>
                    <Header/>
                </section>
            </div>
            <main>
                <Events/>
                <Cards/>
                <Reviews/>
                <Gallery/>
            </main>
        </div>
    )
}
export default Layout;