import axios from "axios";

const instance = axios.create({
  timeout: 60000,
  baseURL: "/"
});

export default instance;
