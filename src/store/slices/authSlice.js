import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URI } from "../api/api.js";

export const login = createAsyncThunk('auth/login', async ({ username, password }) => {
    try {
        const response = await axios.post(`${API_URI}/auth/login/`, { username, password });
        const token = response.data.access;
        localStorage.setItem('access', token);
        localStorage.setItem('username', username); // Store username
        return { username, token }; // Include username in the return
    } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message);
        throw error.response ? error.response.data : new Error('Login failed');
    }
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const refreshToken = localStorage.getItem('refresh_token'); // Make sure this key is correct
        const response = await axios.post(`${API_URI}/refresh_token`, { refreshToken });
        const newToken = response.data.access_token; // Ensure you're getting the correct token
        localStorage.setItem('access', newToken); // Store the new access token correctly
        return newToken;
    } catch (error) {
        throw error;
    }
});
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('access') || null,
        username: localStorage.getItem('username') || null, // Retrieve username from localStorage
        status: '',
        error: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('access');
            localStorage.removeItem('username'); // Remove username on logout

            state.token = null;
            state.username = null; // Reset username on logout
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.token;
                state.username = action.payload.username; // Set username in state
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.token = action.payload;
            });
    },
});


export const { logout } = authSlice.actions;

export default authSlice.reducer;
