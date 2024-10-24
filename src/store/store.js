import {configureStore} from "@reduxjs/toolkit";
import getCategories from "./slices/getCategories.js";
import reserveReducer from "./slices/reserveSlice.js";
import eventsReducer from './slices/getEvents.js';
import galleryReducer from './slices/gallerySlice.js';
import reviewsReducer from './slices/reviewsSlice.js';
import freeTablesReducer from "./slices/freeTablesSlice.js";
import reservationsReducer from "./slices/reservationsSlice.js"
import authReducer from "./slices/authSlice.js";


const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: getCategories,
        reservation: reserveReducer,
        events: eventsReducer,
        gallery: galleryReducer,
        reviews: reviewsReducer,
        freeTables: freeTablesReducer,
        reservations: reservationsReducer,
    },
});

export default store;