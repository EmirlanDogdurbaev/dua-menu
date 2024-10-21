import {configureStore} from "@reduxjs/toolkit";
import getCategories from "./slices/getCategories.js";
import reserveReducer from "./slices/reserveSlice.js";

const store = configureStore({
    reducer: {
        categories: getCategories,
        reservation: reserveReducer,
    },
});

export default store;