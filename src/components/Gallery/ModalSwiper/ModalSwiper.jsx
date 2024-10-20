import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from './ModalSwiper.module.scss';

// eslint-disable-next-line react/prop-types
const ModalSwiper = ({ isOpen, images, initialIndex, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose}>
                &times;
            </button>
            <Swiper
                initialSlide={initialIndex}
                navigation
                modules={[Navigation]}
                className={styles.swiper}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ModalSwiper;
