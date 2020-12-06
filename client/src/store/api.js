import axios from "axios";

export const api = axios.create({
    baseURL: "https://localhost:5000/api/v1"
})

export const setAuthorization = (token) => {
    axios.defaults.headers.common['Authorization'] = token;
}

export const removeAuthorization = () => {
    delete axios.defaults.headers.common['Authorization'];
}