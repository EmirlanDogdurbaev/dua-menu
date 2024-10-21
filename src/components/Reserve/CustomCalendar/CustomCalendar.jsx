import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './CustomCalendar.module.scss';

const CustomCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className={styles.calendarWrapper}>
            <Calendar
                onChange={setDate}
                value={date}
                next2Label={null}  // Убираем кнопки для перехода на 2 месяца вперед/назад
                prev2Label={null}
                showNeighboringMonth={false}  // Отключаем отображение соседних дней предыдущего/следующего месяца
                formatMonthYear={(locale, date) =>
                    new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date)
                }
                tileClassName={({ date: calendarDate }) =>
                    calendarDate.getDate() === date.getDate() &&
                    calendarDate.getMonth() === date.getMonth() &&
                    calendarDate.getFullYear() === date.getFullYear()
                        ? styles.activeDay
                        : ''
                }
            />
        </div>
    );
};

export default CustomCalendar;
