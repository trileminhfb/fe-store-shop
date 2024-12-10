import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Base URL của API
  timeout: 10000, // Thời gian timeout (ms)
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
