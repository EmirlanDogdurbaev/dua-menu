// eslint-disable-next-line react/prop-types
import Nav from "../Nav/Nav.jsx";
import Header from "../Header/Header.jsx";
import classes from "./Layout.module.scss";
import {Logo} from "../Logo/Logo.jsx";
import Events from "../Events/Events.jsx";

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

            </main>
        </div>
    )
}
export default Layout;