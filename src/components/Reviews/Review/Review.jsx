import classes from "./Review.module.scss";

// eslint-disable-next-line react/prop-types
const Review = ({data}) => {
    return (<div className={classes.Review}>
        <img src={data.picture} alt=""/>
        {/*<h1>{data.title}</h1>*/}
    </div>)
}

export default Review;