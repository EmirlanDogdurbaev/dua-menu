// features/gallery/gallerySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URI } from '../api/api.js'; // Убедитесь, что путь правильный

// Асинхронный thunk для получения изображений галереи
export const fetchGallery = createAsyncThunk('gallery/fetchGallery', async () => {
    try {
        const response = await axios.get(`${API_URI}/galleries/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching gallery images:', error); // Логируем ошибку
        throw error; // Бросаем ошибку для обработки в Redux
    }
});;

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        images: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGallery.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGallery.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.images = action.payload; // Сохраняем изображения
            })
            .addCase(fetchGallery.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; // Сохраняем сообщение об ошибке
            });
    },
});

export default gallerySlice.reducer;
