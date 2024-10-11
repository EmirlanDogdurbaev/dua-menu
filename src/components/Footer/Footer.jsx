import classes from "./Footer.module.scss";
import clock from "../../assets/images/clock.svg"
import location from "../../assets/images/location.png"
import instagram from "../../assets/images/instagram.png"

const Footer = () => {
    return (<footer className={classes.footer}>
        <div className={classes.container}>
            <article>
                <a><img src={clock} alt="clock"/><h3>All hours</h3></a>
                <ul>
                    <li>
                        <h5>Sun</h5> <p>12:00 pm - 10:30 pm</p>
                    </li>
                    <li>
                        <h5>Mon</h5> <p>3:00 pm - 10:30 pm</p>
                    </li>
                    <li>
                        <h5>Tue</h5> <p>12:00 pm - 10:30 pm</p>
                    </li>
                    <li>
                        <h5>Wed</h5> <p>12:00 pm - 10:30 pm</p>
                    </li>
                    <li>
                        <h5>Thu</h5> <p>12:00 pm - 10:30 pm</p>
                    </li>

                    <li>
                        <h5>Fri</h5> <p>12:00 pm - 10:30 pm</p>
                    </li>
                    <li>
                        <h5>Sat</h5> <p>12:00 pm - 10:30 pm</p>
                    </li>
                </ul>
            </article>
            <article>
                    <a>
                        <img src={location} alt="location"/>
                        <h3>Location</h3>
                    </a>
                <ul>
                    <li>
                        742 West Higgins Road, <br/> Park Ridge, IL 60068
                    </li>
                </ul>
            </article>

            <article>
                   <a href='http://google.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={instagram} alt="insta"/>
                        <h3>Instagram</h3>
                    </a>
            </article>
        </div>
    </footer>)
}

export default Footer;