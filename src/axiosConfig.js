import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://evangadi-forum-backend-deploy-2-4ved.onrender.com/api",
});

export default axiosBase;
