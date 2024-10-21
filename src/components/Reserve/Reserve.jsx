import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Reserve.module.scss';
import { resetReservationState, submitReservation } from "../../store/slices/reserveSlice.js";

// Utility function to format date
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// eslint-disable-next-line react/prop-types
const Reserve = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: new Date(),
        start_order: '',
        end_order: '',
        total_guests: 1,
        comment: ''
    });

    const dispatch = useDispatch();
    const { loading, success, error } = useSelector((state) => state.reservation);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.start_order || !formData.end_order) {
            alert('Please fill in all required fields');
            return;
        }

        // Format the date before submitting
        const formattedData = {
            ...formData,
            date: formatDate(formData.date), // Convert date to string in 'YYYY-MM-DD' format
        };

        dispatch(submitReservation(formattedData));
    };

    if (success) {
        alert('Reservation successfully submitted!');
        dispatch(resetReservationState());
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <h2>Book a Table</h2>

                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        type="tel"
                        name="phone"
                        placeholder="How can we contact you?"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <div className={styles.datePicker}>
                        <label>Date</label>
                        <Calendar
                            onChange={handleDateChange}
                            value={formData.date}
                        />
                        <p>Selected Date: {formData.date.toLocaleDateString()}</p>
                    </div>

                    <div className={styles.row}>
                        <select name="start_order" value={formData.start_order} onChange={handleChange}>
                            <option value="">choose a start time</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                        </select>
                        <select name="end_order" value={formData.end_order} onChange={handleChange}>
                            <option value="">choose an end time</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                        </select>
                    </div>

                    <input
                        type="number"
                        name="total_guests"
                        min="1"
                        value={formData.total_guests}
                        onChange={handleChange}
                        placeholder="Total guests"
                    />


                    <textarea
                        name="comment"
                        placeholder="Additional Information"
                        value={formData.comment}
                        onChange={handleChange}
                    />

                    <button type="submit" className={styles.bookButton} disabled={loading}>
                        {loading ? 'Submitting...' : 'Book a table'}
                    </button>
                </form>

                {error && <p className={styles.errorMessage}>{error}</p>}
            </div>
        </div>
    );
};

export default Reserve;
