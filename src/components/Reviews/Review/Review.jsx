import classes from "./Review.module.scss";

const Review = ({data}) => {
    return (<div className={classes.Review}>
        {/*<img src="" alt=""/>*/}
        <h1>{data.title}</h1>
    </div>)
}

export default Review;