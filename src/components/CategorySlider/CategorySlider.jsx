import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import classes from './CategorySlider.module.scss';

// eslint-disable-next-line react/prop-types
const CategorySlider = ({ categories, selectedCategory, onSelectCategory }) => (
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
            {/* eslint-disable-next-line react/prop-types */}
            {categories.map((category) => (
                <SwiperSlide key={category.id} className={classes.categorySlide}>
                    <button

                        className={`${classes.categoryButton} ${selectedCategory && selectedCategory.id === category.id ? classes.active : ''}`}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category.name}
                    </button>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button-next-categories">Next</div>
        <div className="swiper-button-prev-categories">Prev</div>
    </div>
);

export default CategorySlider;
