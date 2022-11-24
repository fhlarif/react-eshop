import Axios from "axios";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
  withCredentials: true,
});
