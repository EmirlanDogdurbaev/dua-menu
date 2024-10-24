import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URI } from "../api/api.js";

// Fetch reservations from the API
export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
    const response = await axios.get(`${API_URI}/orders/`);
    return response.data; // The data should match the Order structure.
});

// Delete a reservation by ID
export const deleteReservation = createAsyncThunk('reservations/deleteReservation', async (id) => {
    const token = localStorage.getItem('access');

    // Log the token and the ID
    console.log('Deleting reservation ID:', id);
    console.log('Using token:', token);

    try {
        const response = await axios.delete(`${API_URI}/orders/${id}/delete/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return id; // Return the ID of the deleted reservation for the reducer
    } catch (error) {
        console.error('Error deleting reservation:', error.response); // Log the error response
        throw error; // Rethrow the error to be caught in the slice
    }
});


console.log(localStorage.getItem('access'));

const reservationsSlice = createSlice({
    name: 'reservations',
    initialState: {
        reservations: [],
        status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReservations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReservations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reservations = action.payload; // Set reservations from the API
            })
            .addCase(fetchReservations.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; // Capture error message
            })
            .addCase(deleteReservation.pending, (state) => {
                state.status = 'loading'; // Set loading state when deleting
            })
            .addCase(deleteReservation.fulfilled, (state, action) => {
                state.reservations = state.reservations.filter(reservation => reservation.id !== action.payload);
                state.status = 'succeeded'; // Set succeeded state after deletion
            })
            .addCase(deleteReservation.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; // Capture error message
            });
    },
});

export default reservationsSlice.reducer;
