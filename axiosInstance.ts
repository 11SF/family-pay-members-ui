import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});


axiosInstance.interceptors.request.use(
    function (config) {
        console.log(config.url);

        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        console.log(response.data);
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);