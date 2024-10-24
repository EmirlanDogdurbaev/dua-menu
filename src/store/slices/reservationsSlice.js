import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URI} from "../api/api.js";

// Fetch reservations from the backend
export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
    const response = await axios.get('http://127.0.0.1:8000/orders/');
    return response.data; // The data should match the Order structure.
});
export const deleteReservation = createAsyncThunk('reservations/deleteReservation', async (id) => {
    await axios.delete(`${API_URI}/orders/${id}/delete/`);
    return id; // Return the id of the deleted reservation
});
const reservationsSlice = createSlice({
    name: 'reservations',
    initialState: {
        reservations: [],
        status: 'idle',
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
                state.reservations = action.payload;
            })
            .addCase(fetchReservations.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteReservation.fulfilled, (state, action) => {
                state.reservations = state.reservations.filter(reservation => reservation.id !== action.payload);
            });
    },
});
export default reservationsSlice.reducer;


