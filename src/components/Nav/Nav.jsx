import classes from './Nav.module.scss';
import logo from '../../assets/images/logo.png';

const Nav = () => {
    return (
        <>
            <nav className={classes.nav}>
                <img src={logo} alt="logotype" height={170}/>
            </nav>
            <div className={classes.line}>
            </div>
        </>
    )
}

export default Nav;