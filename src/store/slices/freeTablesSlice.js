import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URI} from "../api/api.js";

export const fetchFreeTables = createAsyncThunk('freeTables/fetchFreeTables', async (date) => {
    const response = await axios.get(`${API_URI}/orders/free-tables/${date}/`);
    return response.data;


});



const freeTablesSlice = createSlice({
    name: 'freeTables',
    initialState: {
        freeTables: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFreeTables.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFreeTables.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.freeTables = action.payload;
            })
            .addCase(fetchFreeTables.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default freeTablesSlice.reducer;
