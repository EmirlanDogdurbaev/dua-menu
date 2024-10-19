import {useEffect, useState} from 'react';
import Event from "./Event/Event.jsx";
import classes from "./Events.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.scss';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';

const Events = () => {
    const [events, setEvents] = useState([]);

    // Имитация получения данных с бэкенда
    useEffect(() => {
        // Здесь нужно сделать запрос на бэкенд для получения данных
        // fetch('api/your-endpoint')
        //   .then(response => response.json())
        //   .then(data => setEvents(data));

        // Пример данных:
        const fetchedEvents = [
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
        setEvents(fetchedEvents);
    }, []);

    // Функция для группировки событий по 3 на слайд
    const groupedEvents = [];
    for (let i = 0; i < events.length; i += 3) {
        groupedEvents.push(events.slice(i, i + 3));
    }

    return (
        <div className={classes.Events}>
            <section>
                <h2>Events</h2>
                <div className={classes.line}/>
            </section>

            <div style={{height: "100vh", width: "100%"}}>

                <Swiper
                    direction="horizontal"
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    {groupedEvents.map((eventGroup, index) => (
                        <SwiperSlide key={index}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                                gap: '10px',
                            }}>
                                {eventGroup.map(event => (
                                    <Event key={event.id} data={event}/>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Events;
