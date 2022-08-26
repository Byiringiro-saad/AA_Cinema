import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_API}`,
  params: {
    api_key: `${process.env.REACT_APP_BACKEND_KEY}`,
    language: "en-US",
  },
});

export default api;
