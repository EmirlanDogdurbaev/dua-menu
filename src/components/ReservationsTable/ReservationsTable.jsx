import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, deleteReservation } from "../../store/slices/reservationsSlice";
import styles from './ReservationsTable.module.scss';

const ReservationsTable = () => {
    const dispatch = useDispatch();
    const { reservations, status, error } = useSelector((state) => state.reservations);

    // Local state for filter
    const [filter, setFilter] = useState('');
    const [monthFilter, setMonthFilter] = useState('');
    const [filteredReservations, setFilteredReservations] = useState(reservations);

    useEffect(() => {
        dispatch(fetchReservations());
    }, [dispatch]);

    useEffect(() => {
        setFilteredReservations(reservations);
    }, [reservations]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonthFilter(event.target.value);
    };

    const applyFilter = () => {
        const filtered = reservations.filter(reservation => {
            const matchesNameOrEmail =
                reservation.name.toLowerCase().includes(filter.toLowerCase()) ||
                reservation.email.toLowerCase().includes(filter.toLowerCase());

            const reservationDate = new Date(reservation.date);
            const matchesMonth = monthFilter ? reservationDate.getMonth() === parseInt(monthFilter) : true;

            return matchesNameOrEmail && matchesMonth;
        });
        setFilteredReservations(filtered);
    };

    const handleDelete = (id) => {
        // Dispatch the delete action
        dispatch(deleteReservation(id)).then((response) => {
            if (response.error) {
                console.log("Error deleting reservation:", response.error.message);
            } else {
                console.log("Reservation deleted successfully");
            }
        });
    };

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={styles.reservationsTable}>
            <h2>Reservations</h2>
            <div className={styles.filterSection}>
                <input
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder="Filter by name or email"
                    className={styles.filterInput}
                />
                <select value={monthFilter} onChange={handleMonthChange} className={styles.monthSelect}>
                    <option value="">All Months</option>
                    {/* Month options */}
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                </select>
                <button onClick={applyFilter} className={styles.filterButton}>Filter</button>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Guests</th>
                    <th>Comment</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredReservations.map((reservation) => (
                    <tr key={reservation.id} className={reservation.highlighted ? styles.highlightedRow : ''}>
                        <td>{reservation.name}</td>
                        <td>{reservation.email}</td>
                        <td>{reservation.phone}</td>
                        <td>{reservation.date}</td>
                        <td>{reservation.start_order}</td>
                        <td>{reservation.end_order}</td>
                        <td>{reservation.total_guests}</td>
                        <td>{reservation.comment || '-'}</td>
                        <td>
                            <button onClick={() => handleDelete(reservation.id)} className={styles.deleteButton}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReservationsTable;
