import GalleryImage from "./GalleryImage/GalleryImage.jsx";
import {Navigation, Pagination} from "swiper/modules";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGallery} from "../../store/slices/gallerySlice.js";
import classes from "./Gallery.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import ModalSwiper from "./ModalSwiper/ModalSwiper.jsx";

import "./gallerySwiper.scss"

const Gallery = () => {
    const dispatch = useDispatch();
    const { images, status } = useSelector((state) => state.gallery); // Получаем данные из Redux
    const [isMobileView, setIsMobileView] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleCardClick = (index) => {
        // Открываем модальное окно только если не мобильное устройство
        if (!isMobileView) {
            setSelectedImageIndex(index);
            setModalOpen(true);
        }
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
        if (status === 'idle') {
            dispatch(fetchGallery());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error fetching gallery images.</p>;
    }

    return (
        <div className={classes.gallery} id="gallery">
            <div className={classes.inner_cont}>
                <section>
                    <h2>Gallery</h2>
                    <div className={classes.small_line}></div>
                </section>

                {isMobileView ? (
                    <div className={classes.slider}>
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
                                <SwiperSlide key={image.id}>
                                    <GalleryImage
                                        image={image.picture}
                                        title={image.title}
                                        onClick={() => handleCardClick(index)} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="swiper-button-next-img"></div>
                        <div className="swiper-button-prev-img"></div>
                    </div>
                ) : (
                    <div className={classes.cards}>
                        {images.map((image, index) => (
                            <GalleryImage
                                key={image.id}
                                image={image.picture}
                                title={image.title}
                                onClick={() => handleCardClick(index)}
                            />
                        ))}
                    </div>
                )}

                {!isMobileView && (
                    <ModalSwiper
                        isOpen={isModalOpen}
                        images={images.map(img => img.picture)}
                        initialIndex={selectedImageIndex}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Gallery;
