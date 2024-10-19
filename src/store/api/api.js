import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",

    // http://dua-restaurant.com/admin/login/?next=/admin/
});

export const API_URI = api.defaults.baseURL;