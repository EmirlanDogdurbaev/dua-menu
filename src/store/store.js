import {configureStore} from "@reduxjs/toolkit";
import getCategories from "./slices/getCategories.js";

const store = configureStore({
    reducer: {
        categories: getCategories,
    },
});

export default store;