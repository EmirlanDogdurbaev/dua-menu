import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import GalleryImage from "./GalleryImage/GalleryImage.jsx";
import classes from './Gallery.module.scss';
import ModalSwiper from "./ModalSwiper/ModalSwiper.jsx";
import { Navigation, Pagination } from "swiper/modules";

import "./gallerySwiper.scss";

const images = [
    'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
    'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
    'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
    'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
];

const Gallery = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleCardClick = (index) => {
        setSelectedImageIndex(index);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Initialize Swiper after the component has mounted
        const initSwiperNavigation = () => {
            const swiperEl = document.querySelector('.swiper-container');
            if (swiperEl) {
                swiperEl.swiper.update();
            }
        };
        initSwiperNavigation();
    }, [isMobileView]);

    return (
        <div className={classes.gallery}>
            <div className={classes.inner_cont}>
                <section>
                    <h2>Gallery</h2>
                    <div className={classes.small_line}></div>
                </section>

                {isMobileView ? (
                    <div className={classes.slider }>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.swiper-button-next-img',
                                prevEl: '.swiper-button-prev-img',
                            }}
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination]}
                            loop={true}
                            breakpoints={{
                                770: {
                                    slidesPerView: 2.5,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <GalleryImage
                                        key={index}
                                        image={image}
                                        title={`Image ${index + 1}`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="swiper-button-next-img">
                            {/* Your SVG for next button */}
                        </div>
                        <div className="swiper-button-prev-img">
                            {/* Your SVG for prev button */}
                        </div>
                    </div>
                ) : (
                    <div className={classes.cards}>
                        {images.map((image, index) => (
                            <GalleryImage
                                key={index}
                                image={image}
                                title={`Image ${index + 1}`}
                                onClick={() => handleCardClick(index)}
                            />
                        ))}
                    </div>
                )}

                <ModalSwiper
                    isOpen={isModalOpen}
                    images={images}
                    initialIndex={selectedImageIndex}
                    onClose={handleCloseModal}
                />
            </div>
        </div>
    );
};

export default Gallery;
