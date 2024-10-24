import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URI } from "../api/api.js";

// Асинхронный thunk для получения всех событий
export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
    const response = await axios.get(`${API_URI}/events/`); // Замените на реальный API
    return response.data;
});
export const fetchEventById = createAsyncThunk('events/fetchEventById', async (id) => {
    const response = await axios.get(`${API_URI}/events/${id}/`);
    return response.data;
});

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        event: null, // Сохраняем конкретное событие
        status: 'idle',
        eventStatus: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // Для получения всех событий
            .addCase(fetchEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.events = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Для получения события по ID
            .addCase(fetchEventById.pending, (state) => {
                state.eventStatus = 'loading';
            })
            .addCase(fetchEventById.fulfilled, (state, action) => {
                state.eventStatus = 'succeeded';
                state.event = action.payload;
            })
            .addCase(fetchEventById.rejected, (state, action) => {
                state.eventStatus = 'failed';
                state.error = action.error.message;
            });
    },
});

export default eventsSlice.reducer;
