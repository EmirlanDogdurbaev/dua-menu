import Nav from "../Nav/Nav.jsx";
import Header from "../Header/Header.jsx";
import classes from "./Layout.module.scss";
import {Logo} from "../Logo/Logo.jsx";
import Events from "../Events/Events.jsx";
import Cards from "../Cards/Cards.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Footer from "../Footer/Footer.jsx";
import {useRef} from "react";

const Layout = () => {
    const aboutRef = useRef(null);
    const eventsRef = useRef(null);
    const menuRef = useRef(null);
    const reviewsRef = useRef(null);
    const galleryRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToRef = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <div className={classes.Layout}>
            <div className={classes.navbar}>
                <Nav  onScrollToSection={(ref) => scrollToRef(ref)}
                      aboutRef={aboutRef}
                      eventsRef={eventsRef}
                      menuRef={menuRef}
                      reviewsRef={reviewsRef}
                      galleryRef={galleryRef}
                      contactRef={contactRef}/>
                <section>
                    <Logo/>
                    <div ref={aboutRef}><Header/></div>
                </section>
            </div>
            <main>
                <div ref={eventsRef}><Events/></div>
                <div ref={menuRef}><Cards/></div>
                <div ref={reviewsRef}><Reviews/></div>
                <div ref={galleryRef}><Gallery/></div>
                <div ref={contactRef}><h2><Footer/></h2></div>

            </main>
        </div>
    )
}
export default Layout;