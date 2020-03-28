import axios from 'axios';

axios.interceptors.request.use((config) => {
    config.headers.token = "Fake token";

    // TODO
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    if (response.config.parse) {
        //perform the manipulation here and change the response object
        // TODO
    }
    return response;
}, error => {
    return Promise.reject(error);
});

export default { axios };