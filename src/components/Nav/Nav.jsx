import {useState} from "react";
import {Link} from "react-router-dom";
import Reserve from "../Reserve/Reserve.jsx";
import CustomCalendar from "../Reserve/CustomCalendar/CustomCalendar.jsx";
import classes from './Nav.module.scss';

const Nav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div style={{position: "relative"}}>
            <div className={classes.burgerMenu} onClick={toggleMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#042F36" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </div>

            <nav className={`${classes.nav} ${isMenuOpen ? classes.active : ''}`}>
                <ul>
                    <li>
                        <Link to="/">About us</Link>
                    </li>
                    <li>
                        <Link to="/">Events</Link>
                    </li>
                    <li>
                        <Link to="/">Menu</Link>
                    </li>
                    <li>
                        <Link to="/">Reviews</Link>
                    </li>
                    <li>
                        <Link to="/">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <li>
                        <button onClick={() => {
                            setIsModalOpen(true);
                            toggleMenu();
                        }}>
                            Reserve
                        </button>
                        <Reserve isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                            <CustomCalendar/>
                        </Reserve>
                    </li>
                </ul>

                <span className={classes.closeIcon} onClick={toggleMenu}>
                    <svg width="40" height="40" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.69629 18.3028L18.3038 7.69531M18.3038 18.3028L7.69629 7.69531" stroke="#042F36"
                            strokeWidth="1.5"
                            strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </nav>
        </div>
    );
};

export default Nav;
