import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
    function (config) {
        console.log(config.baseURL);

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
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const axiosInstanceTransactionService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TRANSACTION_API_BASE_URL,
});

axiosInstanceTransactionService.interceptors.request.use(
    function (config) {
        console.log(config.baseURL);

        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstanceTransactionService.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
