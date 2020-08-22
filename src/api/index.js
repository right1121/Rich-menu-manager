import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.line.me/v2/bot/",
  timeout: 1000
});

export function setAuthHeader(token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;
