import classes from './Nav.module.scss';
import {Link} from "react-router-dom";

const Nav = () => {
    return (

        <nav className={classes.nav}>
            <ul>

                <li>
                    <Link to="/">
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Events </Link>
                </li>
                <li>
                    <Link to="/">
                        Menu
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        Reserve
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;