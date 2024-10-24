import classes from "./Footer.module.scss";
import clock from "../../assets/images/clock.svg"
import location from "../../assets/images/location.png"
import instagram from "../../assets/images/inst.svg"

const Footer = () => {
    return (<footer className={classes.footer} id="contact">
        <div className={classes.container}>
            <div>
                <h1>Contacts</h1>
                <div className={classes.small_line}></div>
            </div>
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
                    <a href='https://maps.app.goo.gl/bgBBNmr8BEBdqiMk6'>
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
                   <a href='https://www.instagram.com/dua.prime.italian.cuisine/' className={classes.insta} >
                        <img src={instagram} alt="insta"/>

                    </a>
            </article>
        </div>
    </footer>)
}

export default Footer;