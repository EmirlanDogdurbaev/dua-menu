import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import './eventPageSwiper.scss';
import styles from './EventPage.module.scss';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchEventById} from "../../store/slices/getEvents.js";

const EventPage = () => {
    const {id} = useParams(); // Получаем ID события из URL
    const dispatch = useDispatch();
    const {event, eventStatus, error} = useSelector((state) => state.events);

    useEffect(() => {
        if (eventStatus === 'idle' || (event && event.id !== Number(id))) {
            dispatch(fetchEventById(id)); // Запрашиваем событие по ID
        }
    }, [id, dispatch, event, eventStatus]);

    if (eventStatus === 'loading') {
        return <p>Loading...</p>;
    }

    if (eventStatus === 'failed') {
        return <p>Error: {error}</p>;
    }

    if (!event) {
        return <p>No event found</p>;
    }

    const images = event.pictures.map((picture) => picture.picture); // Изображения из event.pictures

    return (
        <>
            <div className={styles.navbar}>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.modalContainer}>

                <div className={styles.sliderContainer}>
                    <Swiper
                        autoplay={true}
                        pagination={{clickable: true}}
                        modules={[Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={3}
                        breakpoints={{
                            1024: {slidesPerView: 3},
                            768: {slidesPerView: 2},
                            390: {slidesPerView: 1},
                            320: {slidesPerView: 1}
                        }}

                        loop={true}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`Slide ${index + 1}`}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={styles.textContainer}>
                    <h2>{event.title}</h2>
                    <p>{event.date}</p>
                    <p>{event.description}</p>

                </div>
            </div>
        </>
    );
};

export default EventPage;
