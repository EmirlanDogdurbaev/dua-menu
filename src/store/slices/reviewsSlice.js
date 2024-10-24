// features/reviews/reviewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URI } from '../api/api.js'; // Убедитесь, что путь правильный

// Асинхронный thunk для получения всех отзывов
export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
    const response = await axios.get(`${API_URI}/reviews/`); // Убедитесь, что эндпоинт правильный
    return response.data; // Возвращаем данные
});

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload; // Сохраняем отзывы
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; // Сохраняем сообщение об ошибке
            });
    },
});

export default reviewsSlice.reducer;
