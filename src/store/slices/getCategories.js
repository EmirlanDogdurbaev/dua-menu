import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URI} from "../api/api.js";

export const fetchCategoriesWithMeals = createAsyncThunk(
    'categories/fetchCategoriesWithMeals',
    async () => {
        const response = await axios.get(`${API_URI}/categories-with-meals/`);
        return response.data;
    }
);

export const fetchMealsByCategory = createAsyncThunk(
    'categories/fetchMealsByCategory',
    async (categoryId) => {
        const response = await axios.get(`${API_URI}/categories/${categoryId}/`);
        console.log(response.data);
        return response.data;
    }
);
const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        loading: false,
        selectedMeals: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesWithMeals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategoriesWithMeals.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategoriesWithMeals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchMealsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMealsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedMeals = action.payload;
            })
            .addCase(fetchMealsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default categoriesSlice.reducer;
