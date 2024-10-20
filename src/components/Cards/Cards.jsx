import Card from "./Card/Card.jsx";
import classes from "./Cards.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategoriesWithMeals } from "../../store/slices/getCategories.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import "./swiperCategories.scss";

import { Navigation } from 'swiper/modules';

const Cards = () => {
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector((state) => state.categories);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        dispatch(fetchCategoriesWithMeals());
    }, [dispatch]);

    useEffect(() => {
        if (categories.length > 0) {
            setSelectedCategory(categories[0]);
        }
    }, [categories]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <main className={classes.cards}>
            <section>
                <div className={classes.title}>
                    <h1>Menu</h1>
                    <span className={classes.small_line}></span>
                </div>

                <div className={classes.category_slider}>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={15}
                        navigation={{
                            nextEl: '.swiper-button-next-categories',
                            prevEl: '.swiper-button-prev-categories',
                        }}
                        modules={[Navigation]}
                        className="categoriesSwiper"
                        grabCursor={true}
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.id} className={classes.categorySlide}>
                                <button
                                    className={`${classes.categoryButton} ${selectedCategory && selectedCategory.id === category.id ? classes.active : ''}`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category.name}
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-next-categories"> axaxax</div>
                    <div className="swiper-button-prev-categories">xaxa</div>
                </div>
            </section>

            {selectedCategory && selectedCategory.meals.length > 0 && (
                <div style={{ height: '100%', padding: "30px 0 60px" }} className={classes.cards_cont}>
                    <ul className={classes.cont}>
                        {selectedCategory.meals.map((meal) => (
                            <li key={meal.id}>
                                <Card title={meal.name} price={meal.price} image={meal.picture} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
};

export default Cards;
