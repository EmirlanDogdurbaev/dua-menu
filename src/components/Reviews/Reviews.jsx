import {useEffect, useState} from 'react';
import classes from "./Reviews.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './reviewsSwiper.scss';

import {Navigation, Pagination} from 'swiper/modules';
import Review from "./Review/Review.jsx";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchedReviews = [
            {id: 1, title: 'Event 1'},
            {id: 2, title: 'Event 2'},
            {id: 3, title: 'Event 3'},
            {id: 4, title: 'Event 4'},
            {id: 5, title: 'Event 5'},
            {id: 6, title: 'Event 6'},
            {id: 7, title: 'Event 7'},
            {id: 8, title: 'Event 8'},
            {id: 9, title: 'Event 9'},
        ];
        setReviews(fetchedReviews);
    }, []);

    const groupedReviews = [];
    for (let i = 0; i < reviews.length; i += 3) {
        groupedReviews.push(reviews.slice(i, i + 3));
    }

    return (
        <div className={classes.Reviews}>
            <section>
                <h2>Reviews</h2>
                <div className={classes.line}/>
            </section>

            <div className={classes.swiper_cont}>
                <Swiper
                    direction="horizontal"
                    navigation={{
                        nextEl: '.swiper-button-next-events',
                        prevEl: '.swiper-button-prev-events',
                    }}
                    pagination={true}
                    modules={[Navigation, Pagination]}
                    className="reviewsSwiper">
                    {groupedReviews.map((reviewsGroup, index) => (
                        <SwiperSlide key={index}>
                            <div className={classes.box}>
                                {reviewsGroup.map(review => (
                                    <Review key={review.id} data={review}/>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-next-events"></div>
                <div className="swiper-button-prev-events"></div>
            </div>
        </div>
    );
}

export default Reviews;
