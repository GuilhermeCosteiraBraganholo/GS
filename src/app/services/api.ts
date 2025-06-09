import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // troque para a URL da sua API Java
});

export default api;
