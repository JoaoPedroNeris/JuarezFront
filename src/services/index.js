import axios from "axios";

const API = axios.create({
    baseURL: "https://juarezapi.onrender.com",
});

// 🔹 REQUEST: token sempre antes da request
API.interceptors.request.use(config => {
    if (typeof window !== "undefined") {
        const token = sessionStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

// 🔹 RESPONSE: erro global
API.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            if (typeof window !== "undefined") {
                sessionStorage.clear();
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export { API };