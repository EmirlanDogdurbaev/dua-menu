import classes from "./Review.module.scss";

// eslint-disable-next-line react/prop-types
const Review = ({data}) => {
    return (<div className={classes.Review}>
        <img src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg" alt=""/>
        {/*<h1>{data.title}</h1>*/}
    </div>)
}

export default Review;