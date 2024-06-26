import axios from "axios";
let adminUrl = "https://doctor-service.onrender.com";

export const baseURL = adminUrl;
let axiosInstance = axios.create({
  baseURL,

});

export { adminUrl };
export const profile= (media) => {
  return `https://doctor-service.onrender.com/${media}`;
};


axiosInstance.interceptors.request.use(
  async function (config) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosInstance; 