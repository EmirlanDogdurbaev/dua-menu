import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URI} from "../api/api.js";

// Создаем асинхронный thunk для отправки данных формы
export const submitReservation = createAsyncThunk(
    'reservation/submitReservation',
    async (formData, { rejectWithValue }) => {
        try {
            // Замените URL на ваш бэкенд-эндпоинт
            const response = await axios.post(`${API_URI}/orders/`, formData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const reserveSlice = createSlice({
    name: 'reservation',
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        resetReservationState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitReservation.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(submitReservation.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(submitReservation.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload || 'Failed to submit reservation';
            });
    },
});

export const { resetReservationState } = reserveSlice.actions;

export default reserveSlice.reducer;
