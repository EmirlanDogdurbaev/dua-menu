import axios from "axios";

const api = axios.create({
    baseURL: "https://cafe-menu-make.onrender.com",
});

export const API_URI = api.defaults.baseURL;