import logo from "../../assets/images/test.svg";
import classes from "./Logo.module.scss";
export const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="logotype" />
        </div>
    )
}

